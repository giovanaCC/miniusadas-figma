import { FormEvent, useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import { CirclePlus, LogOut, Pause, Send, Tag } from "lucide-react";
import { useAuth } from "../AuthContext";
import { categoryLabel, dealerApi, formatPrice, ListingSummary } from "../api";

const statusLabel: Record<string, string> = {
  draft: "Rascunho",
  pending_approval: "Em aprovação",
  published: "Publicado",
  paused: "Pausado",
  sold: "Vendido",
};

const emptyForm = { title: "", category: "mini_escavadeira", model: "", year: "", hours_used: "", price: "", description: "" };

export function DealerPanel() {
  const { user, logout } = useAuth();
  const [listings, setListings] = useState<ListingSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const load = useCallback(async () => {
    setLoading(true);
    try { setListings(await dealerApi.listings()); }
    catch (error) { setMessage(error instanceof Error ? error.message : "Não foi possível carregar os anúncios."); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  async function act(action: () => Promise<unknown>, success: string) {
    try { await action(); setMessage(success); await load(); }
    catch (error) { setMessage(error instanceof Error ? error.message : "Não foi possível concluir a ação."); }
  }

  async function createListing(event: FormEvent) {
    event.preventDefault();
    await act(() => dealerApi.create({
      title: form.title,
      category: form.category,
      model: form.model || undefined,
      year: form.year ? Number(form.year) : undefined,
      hours_used: form.hours_used ? Number(form.hours_used) : undefined,
      price: Number(form.price),
      description: form.description || undefined,
    }), "Anúncio criado como rascunho.");
    setForm(emptyForm);
    setShowForm(false);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-9">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-7">
        <div>
          <p className="text-red-600 text-xs font-bold uppercase tracking-widest">Área restrita</p>
          <h1 className="text-2xl font-extrabold text-gray-900 mt-1">Painel da concessionária</h1>
          <p className="text-sm text-gray-500 mt-1">{user?.dealer_name || user?.name}</p>
        </div>
        <div className="flex gap-2">
          <Link to="/" className="px-4 py-2.5 border border-gray-200 rounded text-sm font-semibold">Ver portal</Link>
          <button onClick={() => setShowForm((value) => !value)} className="flex items-center gap-2 px-4 py-2.5 text-white rounded text-sm font-bold" style={{ backgroundColor: "#CC0000" }}>
            <CirclePlus size={16} /> Novo anúncio
          </button>
          <button onClick={logout} title="Sair" className="p-2.5 border border-gray-200 rounded"><LogOut size={17} /></button>
        </div>
      </div>

      {message && <div className="mb-5 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700">{message}</div>}

      {showForm && (
        <form onSubmit={createListing} className="bg-white border border-gray-200 rounded-xl p-6 mb-7 grid grid-cols-1 md:grid-cols-2 gap-4">
          <h2 className="md:col-span-2 text-lg font-bold">Cadastrar nova máquina</h2>
          <input required placeholder="Título do anúncio" className="border border-gray-200 rounded px-3 py-2.5" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          <select className="border border-gray-200 rounded px-3 py-2.5" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}>
            {Object.entries(categoryLabel).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
          <input placeholder="Modelo" className="border border-gray-200 rounded px-3 py-2.5" value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} />
          <input type="number" placeholder="Ano" className="border border-gray-200 rounded px-3 py-2.5" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} />
          <input type="number" placeholder="Horas de uso" className="border border-gray-200 rounded px-3 py-2.5" value={form.hours_used} onChange={(e) => setForm({ ...form, hours_used: e.target.value })} />
          <input required type="number" placeholder="Preço" className="border border-gray-200 rounded px-3 py-2.5" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
          <textarea placeholder="Descrição" className="md:col-span-2 border border-gray-200 rounded px-3 py-2.5" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          <div className="md:col-span-2 flex justify-end gap-2">
            <button type="button" onClick={() => setShowForm(false)} className="px-4 py-2.5 border border-gray-200 rounded text-sm font-semibold">Cancelar</button>
            <button className="px-5 py-2.5 text-white rounded text-sm font-bold" style={{ backgroundColor: "#CC0000" }}>Salvar rascunho</button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {[
          ["Publicados", listings.filter((item) => item.status === "published").length],
          ["Em aprovação", listings.filter((item) => item.status === "pending_approval").length],
          ["Rascunhos", listings.filter((item) => item.status === "draft").length],
          ["Vendidos", listings.filter((item) => item.status === "sold").length],
        ].map(([label, value]) => <div key={String(label)} className="bg-white border border-gray-200 rounded-xl p-5"><p className="text-2xl font-extrabold">{value}</p><p className="text-xs text-gray-500 mt-1">{label}</p></div>)}
      </div>

      <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
        {loading ? <p className="p-8 text-center text-gray-500">Carregando...</p> : listings.length === 0 ? <p className="p-8 text-center text-gray-500">Nenhum anúncio cadastrado.</p> : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50"><tr><th className="text-left p-4">Equipamento</th><th className="text-left p-4">Categoria</th><th className="text-left p-4">Status</th><th className="text-right p-4">Preço</th><th className="text-right p-4">Ações</th></tr></thead>
            <tbody className="divide-y divide-gray-100">
              {listings.map((item) => <tr key={item.id}>
                <td className="p-4 font-semibold">{item.title}<span className="block text-xs text-gray-400 font-normal">{item.model} {item.year || ""}</span></td>
                <td className="p-4 text-gray-600">{categoryLabel[item.category] || item.category}</td>
                <td className="p-4"><span className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold">{statusLabel[item.status || ""] || item.status}</span></td>
                <td className="p-4 text-right font-semibold">{formatPrice(item.price)}</td>
                <td className="p-4"><div className="flex justify-end gap-2">
                  {["draft", "paused"].includes(item.status || "") && <button title="Enviar para aprovação" onClick={() => act(() => dealerApi.submit(item.id), "Anúncio enviado para aprovação.")}><Send size={16} /></button>}
                  {item.status === "published" && <button title="Pausar" onClick={() => act(() => dealerApi.pause(item.id), "Anúncio pausado.")}><Pause size={16} /></button>}
                  {item.status === "published" && <button title="Marcar como vendido" onClick={() => act(() => dealerApi.sold(item.id), "Anúncio marcado como vendido.")}><Tag size={16} /></button>}
                </div></td>
              </tr>)}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
