import { useState } from "react";
import { Link } from "react-router";
import { Search, SlidersHorizontal, MapPin, ChevronRight, X, ArrowUpDown } from "lucide-react";

const allMachines = [
  { id: 1, name: "Miniescavadeira YANMAR VIO55-6", year: 2021, hours: "1.100 h", price: "R$ 210.000", location: "São Paulo - SP", image: "https://images.unsplash.com/photo-1495036019936-220b29b930ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Constru Tech SP", category: "Miniescavadeiras", model: "VIO55-6" },
  { id: 2, name: "Miniescavadeira YANMAR VIO27", year: 2022, hours: "450 h", price: "R$ 145.000", location: "Campinas - SP", image: "https://images.unsplash.com/photo-1583024011792-b165975b52f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "AgroSul Máquinas", category: "Miniescavadeiras", model: "VIO27" },
  { id: 3, name: "Mini Pá Carregadeira YANMAR V4-3", year: 2020, hours: "890 h", price: "R$ 128.000", location: "Curitiba - PR", image: "https://images.unsplash.com/photo-1563201515-adbe35c669c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Constru Paraná", category: "Mini Pás Carregadeiras", model: "V4-3" },
  { id: 4, name: "Mini Pá Carregadeira YANMAR V3-3", year: 2019, hours: "1.400 h", price: "R$ 85.000", location: "Porto Alegre - RS", image: "https://images.unsplash.com/photo-1564868480822-32f714a0e763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Maquinários Sul RS", category: "Mini Pás Carregadeiras", model: "V3-3" },
  { id: 5, name: "Mini Retroescavadeira YANMAR CBL40", year: 2018, hours: "2.200 h", price: "R$ 72.000", location: "Goiânia - GO", image: "https://images.unsplash.com/photo-1696441567908-6a04d49e1350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Centro-Oeste Máquinas", category: "Mini Retroescavadeiras", model: "CBL40" },
  { id: 6, name: "Miniescavadeira YANMAR SV08", year: 2022, hours: "220 h", price: "R$ 98.000", location: "Florianópolis - SC", image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Constru Catarinense", category: "Miniescavadeiras", model: "SV08" },
  { id: 7, name: "Miniescavadeira YANMAR VIO17", year: 2020, hours: "830 h", price: "R$ 88.000", location: "Belo Horizonte - MG", image: "https://images.unsplash.com/photo-1523559094051-53bac879eb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Minas Máquinas BH", category: "Miniescavadeiras", model: "VIO17" },
  { id: 8, name: "Mini Pá Carregadeira YANMAR V4", year: 2021, hours: "610 h", price: "R$ 115.000", location: "Brasília - DF", image: "https://images.unsplash.com/photo-1568680870491-590cd4e224ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "Constru Capital DF", category: "Mini Pás Carregadeiras", model: "V4" },
  { id: 9, name: "Mini Retroescavadeira YANMAR CBL40", year: 2017, hours: "3.100 h", price: "R$ 58.000", location: "Ribeirão Preto - SP", image: "https://images.unsplash.com/photo-1614447428943-52ec0bdbc7aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80", dealer: "YANMAR Agro Ribeirão", category: "Mini Retroescavadeiras", model: "CBL40" },
];

const sortOptions = ["Mais recentes", "Menor preço", "Maior preço", "Menor hora-máquina"];

export function Maquinas() {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategoria, setSelectedCategoria] = useState<string[]>([]);
  const [selectedEstado, setSelectedEstado] = useState("");
  const [sortBy, setSortBy] = useState("Mais recentes");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["Miniescavadeiras", "Mini Pás Carregadeiras", "Mini Retroescavadeiras"];
  const estados = ["São Paulo - SP", "Campinas - SP", "Curitiba - PR", "Porto Alegre - RS", "Belo Horizonte - MG", "Goiânia - GO", "Florianópolis - SC", "Brasília - DF", "Ribeirão Preto - SP"];
  const precoRanges = ["Até R$ 80.000", "R$ 80k – R$ 150k", "R$ 150k – R$ 300k", "Acima de R$ 300k"];
  const anos = ["2022", "2021", "2020", "2019", "2018", "2017 ou anterior"];

  const toggleItem = (arr: string[], setArr: (v: string[]) => void, val: string) => {
    setArr(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);
  };

  const filtered = allMachines.filter((m) => {
    if (searchTerm && !m.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    if (selectedCategoria.length && !selectedCategoria.includes(m.category)) return false;
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
        <p className="text-gray-700 mb-3" style={{ fontSize: "0.85rem", fontWeight: 700 }}>Região / Localização</p>
        <select
          className="w-full border border-gray-200 rounded px-3 py-2 text-gray-600 outline-none"
          style={{ fontSize: "0.82rem" }}
          value={selectedEstado}
          onChange={(e) => setSelectedEstado(e.target.value)}
        >
          <option value="">Todas as regiões</option>
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
        onClick={() => { setSelectedCategoria([]); setSelectedEstado(""); }}
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
            {selectedCategoria.length > 0 && (
              <span className="text-white text-xs px-1.5 rounded-full" style={{ backgroundColor: "#CC0000" }}>
                {selectedCategoria.length}
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
        {selectedCategoria.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {selectedCategoria.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full border"
                style={{ backgroundColor: "#FFF0F0", borderColor: "#FFCCCC", color: "#CC0000", fontSize: "0.78rem", fontWeight: 600 }}
              >
                {tag}
                <button onClick={() => setSelectedCategoria(selectedCategoria.filter((x) => x !== tag))}>
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
                <button onClick={() => { setSelectedCategoria([]); setSearchTerm(""); }} className="mt-3 text-red-600" style={{ fontSize: "0.85rem", fontWeight: 600 }}>
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
                          className="absolute top-2.5 left-2.5 text-white px-2 py-0.5 rounded-sm"
                          style={{ backgroundColor: "#1C1C1C", fontSize: "0.65rem", fontWeight: 700, opacity: 0.85 }}
                        >
                          {m.category}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="text-gray-900 mb-0.5" style={{ fontSize: "0.88rem", fontWeight: 700, lineHeight: 1.3 }}>{m.name}</h3>
                        <p className="text-gray-400 mb-2.5" style={{ fontSize: "0.72rem" }}>
                          {m.year} · {m.hours} · <MapPin size={10} className="inline" /> {m.location}
                        </p>
                        <div className="flex items-center justify-between">
                          <span style={{ fontSize: "1rem", fontWeight: 800, color: "#CC0000" }}>{m.price}</span>
                          <span className="text-red-600 flex items-center gap-0.5 group-hover:gap-1 transition-all" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                            Ver detalhes <ChevronRight size={13} />
                          </span>
                        </div>
                        <p className="text-gray-400 mt-1.5" style={{ fontSize: "0.7rem" }}>{m.dealer}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Paginação */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  {[1, 2, 3, "...", 8].map((page, i) => (
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
