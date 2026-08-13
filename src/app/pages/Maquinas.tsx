import { useState } from "react";
import { Link } from "react-router";
import { Search, SlidersHorizontal, MapPin, Star, ChevronRight, X, ChevronDown, ArrowUpDown } from "lucide-react";

const allMachines = [
  { id: 1, name: "Trator YANMAR YT347", year: 2022, hours: "320 h", condition: "Usada", price: "R$ 148.000", location: "Campinas - SP", image: "https://images.unsplash.com/photo-1563201515-adbe35c669c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "AgroSul Máquinas", rating: 4.9, category: "Tratores de Rodas", model: "YT347", conditionColor: "#2D7A2D" },
  { id: 2, name: "Miniescavadeira YANMAR VIO55", year: 2021, hours: "1.100 h", condition: "Usada", price: "R$ 210.000", location: "São Paulo - SP", image: "https://images.unsplash.com/photo-1495036019936-220b29b930ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Constru Tech SP", rating: 4.7, category: "Miniescavadeiras", model: "VIO55", conditionColor: "#2D7A2D" },
  { id: 3, name: "Trator YANMAR YT359", year: 2023, hours: "80 h", condition: "Demonstração", price: "R$ 185.000", location: "Ribeirão Preto - SP", image: "https://images.unsplash.com/photo-1564868480822-32f714a0e763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "YANMAR Agro Ribeirão", rating: 5.0, category: "Tratores de Rodas", model: "YT359", conditionColor: "#0066CC" },
  { id: 4, name: "Motor Náutico YANMAR 6LY", year: 2020, hours: "620 h", condition: "Usada", price: "R$ 95.000", location: "Santos - SP", image: "https://images.unsplash.com/photo-1686675762628-2d2f2fdb2d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Náutica Sul", rating: 4.8, category: "Motores Náuticos", model: "6LY400", conditionColor: "#2D7A2D" },
  { id: 5, name: "Escavadeira YANMAR SV100", year: 2022, hours: "450 h", condition: "Locação", price: "R$ 8.500/mês", location: "Curitiba - PR", image: "https://images.unsplash.com/photo-1583024011792-b165975b52f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Constru Paraná", rating: 4.6, category: "Miniescavadeiras", model: "SV100", conditionColor: "#8B4A00" },
  { id: 6, name: "Grupo Gerador YANMAR YDG5500", year: 2021, hours: "280 h", condition: "Usada", price: "R$ 28.500", location: "Porto Alegre - RS", image: "https://images.unsplash.com/photo-1523559094051-53bac879eb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Energia Sul RS", rating: 4.5, category: "Grupos Geradores", model: "YDG5500", conditionColor: "#2D7A2D" },
  { id: 7, name: "Trator YANMAR YT235", year: 2019, hours: "2.400 h", condition: "Usada", price: "R$ 72.000", location: "Goiânia - GO", image: "https://images.unsplash.com/photo-1568680870491-590cd4e224ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Agro Centro-Oeste", rating: 4.4, category: "Tratores de Rodas", model: "YT235", conditionColor: "#2D7A2D" },
  { id: 8, name: "Motor Diesel YANMAR 4TNV98", year: 2022, hours: "190 h", condition: "Demonstração", price: "R$ 45.000", location: "Belo Horizonte - MG", image: "https://images.unsplash.com/photo-1614447428943-52ec0bdbc7aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Industrial MG", rating: 4.9, category: "Motores Diesel", model: "4TNV98", conditionColor: "#0066CC" },
  { id: 9, name: "Miniescavadeira YANMAR VIO17", year: 2020, hours: "830 h", condition: "Usada", price: "R$ 88.000", location: "Florianópolis - SC", image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Constru Catarinense", rating: 4.6, category: "Miniescavadeiras", model: "VIO17", conditionColor: "#2D7A2D" },
];

const sortOptions = ["Mais recentes", "Menor preço", "Maior preço", "Menor hora-máquina", "Melhor avaliação"];

export function Maquinas() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState<string[]>([]);
  const [selectedCondicao, setSelectedCondicao] = useState<string[]>([]);
  const [selectedEstado, setSelectedEstado] = useState("");
  const [sortBy, setSortBy] = useState("Mais recentes");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Tratores de Rodas", "Tratores de Esteira", "Miniescavadeiras", "Colheitadeiras", "Motores Diesel", "Grupos Geradores", "Motores Náuticos"];
  const condicoes = ["Usada", "Demonstração", "Locação"];
  const estados = ["São Paulo - SP", "Curitiba - PR", "Porto Alegre - RS", "Belo Horizonte - MG", "Goiânia - GO", "Florianópolis - SC"];
  const precoRanges = ["Até R$ 50.000", "R$ 50k – R$ 150k", "R$ 150k – R$ 400k", "Acima de R$ 400k"];
  const anos = ["2023", "2022", "2021", "2020", "2019", "2018 ou anterior"];

  const toggleItem = (arr: string[], setArr: (v: string[]) => void, val: string) => {
    setArr(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  };

  const filtered = allMachines.filter((m) => {
    if (searchTerm && !m.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (selectedCategoria.length && !selectedCategoria.includes(m.category)) return false;
    if (selectedCondicao.length && !selectedCondicao.includes(m.condition)) return false;
    if (selectedEstado && !m.location.includes(selectedEstado.split(" - ")[0])) return false;
    return true;
  });

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Categoria */}
      <div>
        <p className="text-gray-700 mb-3" style={{ fontSize: "0.85rem", fontWeight: 700 }}>Categoria</p>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCategoria.includes(cat)}
                onChange={() => toggleItem(selectedCategoria, setSelectedCategoria, cat)}
                className="w-4 h-4 rounded accent-red-600"
              />
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors" style={{ fontSize: "0.82rem" }}>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid #EBEBEB" }} />

      {/* Condição */}
      <div>
        <p className="text-gray-700 mb-3" style={{ fontSize: "0.85rem", fontWeight: 700 }}>Tipo de oferta</p>
        <div className="space-y-2">
          {condicoes.map((c) => (
            <label key={c} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedCondicao.includes(c)}
                onChange={() => toggleItem(selectedCondicao, setSelectedCondicao, c)}
                className="w-4 h-4 rounded accent-red-600"
              />
              <span className="text-gray-600 group-hover:text-gray-900 transition-colors" style={{ fontSize: "0.82rem" }}>{c}</span>
            </label>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid #EBEBEB" }} />

      {/* Ano */}
      <div>
        <p className="text-gray-700 mb-3" style={{ fontSize: "0.85rem", fontWeight: 700 }}>Ano</p>
        <div className="grid grid-cols-2 gap-2">
          {anos.map((ano) => (
            <button
              key={ano}
              className="py-1.5 px-2 rounded border text-center transition-all"
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                borderColor: "#E5E5E5",
                color: "#555",
                backgroundColor: "#fff",
              }}
            >
              {ano}
            </button>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid #EBEBEB" }} />

      {/* Localização */}
      <div>
        <p className="text-gray-700 mb-3" style={{ fontSize: "0.85rem", fontWeight: 700 }}>Localização</p>
        <select
          className="w-full border border-gray-200 rounded px-3 py-2 text-gray-600 outline-none"
          style={{ fontSize: "0.82rem" }}
          value={selectedEstado}
          onChange={(e) => setSelectedEstado(e.target.value)}
        >
          <option value="">Todos os estados</option>
          {estados.map((e) => <option key={e}>{e}</option>)}
        </select>
      </div>

      <div style={{ borderTop: "1px solid #EBEBEB" }} />

      {/* Faixa de preço */}
      <div>
        <p className="text-gray-700 mb-3" style={{ fontSize: "0.85rem", fontWeight: 700 }}>Faixa de preço</p>
        <div className="space-y-2">
          {precoRanges.map((p) => (
            <label key={p} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="preco" className="accent-red-600" />
              <span className="text-gray-600" style={{ fontSize: "0.82rem" }}>{p}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() => { setSelectedCategoria([]); setSelectedCondicao([]); setSelectedEstado(""); }}
        className="w-full py-2 border border-red-200 text-red-600 rounded hover:bg-red-50 transition-colors"
        style={{ fontSize: "0.82rem", fontWeight: 600 }}
      >
        Limpar filtros
      </button>
    </div>
  );

  return (
    <div style={{ backgroundColor: "#F7F7F7", minHeight: "100vh" }}>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-gray-900 mb-1" style={{ fontSize: "1.5rem", fontWeight: 800 }}>Máquinas disponíveis</h1>
          <p className="text-gray-500" style={{ fontSize: "0.85rem" }}>{filtered.length} equipamentos encontrados</p>
        </div>

        {/* Search + controls bar */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 flex items-center gap-2 bg-white border border-gray-200 rounded px-3 py-2.5 focus-within:border-red-400 transition-colors shadow-sm">
            <Search size={15} className="text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por modelo ou categoria..."
              className="flex-1 bg-transparent outline-none text-gray-700"
              style={{ fontSize: "0.875rem" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-2.5 rounded shadow-sm"
            style={{ fontSize: "0.82rem", fontWeight: 600, color: "#444" }}
          >
            <SlidersHorizontal size={15} /> Filtros
            {(selectedCategoria.length + selectedCondicao.length) > 0 && (
              <span className="text-white text-xs px-1.5 rounded-full" style={{ backgroundColor: "#CC0000" }}>
                {selectedCategoria.length + selectedCondicao.length}
              </span>
            )}
          </button>

          <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-2.5 rounded shadow-sm">
            <ArrowUpDown size={14} className="text-gray-400" />
            <select
              className="bg-transparent outline-none text-gray-600"
              style={{ fontSize: "0.82rem" }}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        {/* Active filters pills */}
        {(selectedCategoria.length + selectedCondicao.length) > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {[...selectedCategoria, ...selectedCondicao].map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full border"
                style={{ backgroundColor: "#FFF0F0", borderColor: "#FFCCCC", color: "#CC0000", fontSize: "0.78rem", fontWeight: 600 }}
              >
                {tag}
                <button onClick={() => {
                  if (selectedCategoria.includes(tag)) setSelectedCategoria(selectedCategoria.filter((x) => x !== tag));
                  else setSelectedCondicao(selectedCondicao.filter((x) => x !== tag));
                }}>
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-6">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 sticky top-24">
              <div className="flex items-center justify-between mb-5">
                <p className="text-gray-900" style={{ fontSize: "0.9rem", fontWeight: 700 }}>Filtros</p>
                <SlidersHorizontal size={15} className="text-gray-400" />
              </div>
              <FilterSidebar />
            </div>
          </aside>

          {/* Mobile filters */}
          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              <div className="absolute inset-0 bg-black/40" onClick={() => setShowFilters(false)} />
              <div className="relative ml-auto w-72 bg-white h-full overflow-y-auto p-5">
                <div className="flex items-center justify-between mb-5">
                  <p style={{ fontWeight: 700 }}>Filtros</p>
                  <button onClick={() => setShowFilters(false)}><X size={18} /></button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Cards grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
                <p className="text-gray-400" style={{ fontSize: "1rem" }}>Nenhuma máquina encontrada com os filtros selecionados.</p>
                <button onClick={() => { setSelectedCategoria([]); setSelectedCondicao([]); setSearchTerm(""); }} className="mt-3 text-red-600" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
                  Limpar filtros
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filtered.map((m) => (
                    <Link
                      key={m.id}
                      to={`/maquinas/${m.id}`}
                      className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md hover:border-red-100 transition-all group block"
                    >
                      <div className="relative overflow-hidden" style={{ height: "170px" }}>
                        <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <span
                          className="absolute top-2.5 right-2.5 text-white px-2 py-0.5 rounded-sm"
                          style={{ backgroundColor: m.conditionColor, fontSize: "0.65rem", fontWeight: 700 }}
                        >
                          {m.condition}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-gray-900 mb-0.5" style={{ fontSize: "0.88rem", fontWeight: 700, lineHeight: 1.3 }}>{m.name}</h3>
                        <p className="text-gray-400 mb-2.5" style={{ fontSize: "0.72rem" }}>
                          {m.year} · {m.hours} · <MapPin size={10} className="inline" /> {m.location}
                        </p>
                        <div className="flex items-center justify-between">
                          <span style={{ fontSize: "1rem", fontWeight: 800, color: "#CC0000" }}>{m.price}</span>
                          <div className="flex items-center gap-1">
                            <Star size={11} fill="#F5A623" color="#F5A623" />
                            <span className="text-gray-500" style={{ fontSize: "0.72rem" }}>{m.rating}</span>
                          </div>
                        </div>
                        <p className="text-gray-400 mt-1.5" style={{ fontSize: "0.7rem" }}>{m.dealer}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Paginação */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  {[1, 2, 3, "...", 12].map((page, i) => (
                    <button
                      key={i}
                      className="w-9 h-9 rounded flex items-center justify-center transition-all"
                      style={{
                        fontSize: "0.83rem",
                        fontWeight: page === 1 ? 700 : 400,
                        backgroundColor: page === 1 ? "#CC0000" : "#fff",
                        color: page === 1 ? "#fff" : "#555",
                        border: "1px solid",
                        borderColor: page === 1 ? "#CC0000" : "#E5E5E5",
                      }}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    className="flex items-center gap-1 px-3 h-9 rounded border border-gray-200 bg-white text-gray-600 hover:border-red-300 hover:text-red-600 transition-colors"
                    style={{ fontSize: "0.82rem" }}
                  >
                    Próxima <ChevronRight size={14} />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
