import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";
import { CheckCircle2, LogOut, XCircle } from "lucide-react";
import { useAuth } from "../AuthContext";
import { adminApi, categoryLabel, formatPrice, ListingSummary } from "../api";

const tabs = [
  ["pending_approval", "Em aprovação"], ["", "Todos"], ["published", "Publicados"], ["draft", "Rascunhos"], ["paused", "Pausados"], ["sold", "Vendidos"],
];

export function AdminPanel() {
  const { user, logout } = useAuth();
  const [status, setStatus] = useState("pending_approval");
  const [listings, setListings] = useState<ListingSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try { setListings(await adminApi.listings(status)); }
    catch (error) { setMessage(error instanceof Error ? error.message : "Não foi possível carregar os anúncios."); }
    finally { setLoading(false); }
  }, [status]);

  useEffect(() => { load(); }, [load]);

  async function act(action: () => Promise<unknown>, success: string) {
    try { await action(); setMessage(success); await load(); }
    catch (error) { setMessage(error instanceof Error ? error.message : "Não foi possível concluir a ação."); }
  }

  function reject(item: ListingSummary) {
    const reason = window.prompt("Informe o motivo da recusa (mínimo de 10 caracteres):");
    if (!reason || reason.trim().length < 10) return;
    act(() => adminApi.reject(item.id, reason.trim()), "Anúncio recusado.");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-9">
      <div className="flex items-start justify-between gap-4 mb-7">
        <div><p className="text-red-600 text-xs font-bold uppercase tracking-widest">YANMAR Master</p><h1 className="text-2xl font-extrabold mt-1">Painel administrador</h1><p className="text-sm text-gray-500 mt-1">{user?.name}</p></div>
        <div className="flex gap-2"><Link to="/" className="px-4 py-2.5 border border-gray-200 rounded text-sm font-semibold">Ver portal</Link><button onClick={logout} title="Sair" className="p-2.5 border border-gray-200 rounded"><LogOut size={17} /></button></div>
      </div>
      {message && <div className="mb-5 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm">{message}</div>}
      <div className="flex gap-1 border-b border-gray-200 mb-6 overflow-x-auto">
        {tabs.map(([value, label]) => <button key={value} onClick={() => setStatus(value)} className="px-4 py-3 whitespace-nowrap text-sm font-semibold border-b-2" style={{ borderColor: status === value ? "#CC0000" : "transparent", color: status === value ? "#CC0000" : "#666" }}>{label}</button>)}
      </div>
      <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
        {loading ? <p className="p-8 text-center text-gray-500">Carregando...</p> : listings.length === 0 ? <p className="p-8 text-center text-gray-500">Nenhum anúncio nesta categoria.</p> : (
          <table className="w-full text-sm"><thead className="bg-gray-50"><tr><th className="text-left p-4">Equipamento</th><th className="text-left p-4">Concessionária</th><th className="text-left p-4">Categoria</th><th className="text-left p-4">Status</th><th className="text-right p-4">Preço</th><th className="text-right p-4">Ações</th></tr></thead>
            <tbody className="divide-y divide-gray-100">{listings.map((item) => <tr key={item.id}><td className="p-4 font-semibold">{item.title}<span className="block text-xs text-gray-400 font-normal">{item.model} {item.year || ""}</span></td><td className="p-4 text-gray-600">{item.dealer_name || "—"}</td><td className="p-4 text-gray-600">{categoryLabel[item.category] || item.category}</td><td className="p-4"><span className="px-2 py-1 rounded bg-gray-100 text-xs font-semibold">{item.status}</span></td><td className="p-4 text-right font-semibold">{formatPrice(item.price)}</td><td className="p-4"><div className="flex justify-end gap-3">{item.status === "pending_approval" && <><button title="Aprovar" className="text-green-600" onClick={() => act(() => adminApi.approve(item.id), "Anúncio aprovado e publicado.")}><CheckCircle2 size={18} /></button><button title="Recusar" className="text-red-600" onClick={() => reject(item)}><XCircle size={18} /></button></>}</div></td></tr>)}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}
