import { MapPin, Search, Phone, ArrowRight } from "lucide-react";
import { useState } from "react";

const dealers = [
  { name: "YANMAR Agro São Paulo", city: "São Paulo", state: "SP", distance: "2,3 km", phone: "(11) 3333-4444", open: true },
  { name: "Máquinas Centro-Oeste", city: "Campinas", state: "SP", distance: "8,7 km", phone: "(19) 2222-5555", open: true },
  { name: "Agro Sul Tratores", city: "Curitiba", state: "PR", distance: "14,1 km", phone: "(41) 4444-6666", open: false },
];

export function DealerLocator() {
  const [search, setSearch] = useState("");

  return (
    <section style={{ backgroundColor: "#F2F2F2" }} className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: info + search */}
          <div className="lg:col-span-2">
            <p className="mb-2" style={{ color: "#CC0000", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Rede de Concessionárias
            </p>
            <h2 className="text-gray-900 mb-3" style={{ fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.2 }}>
              Encontre o revendedor<br />mais próximo
            </h2>
            <p className="text-gray-500 mb-6" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
              Com mais de 1.200 concessionárias em todo o Brasil, a YANMAR está sempre perto de você para oferecer atendimento, peças e suporte técnico especializado.
            </p>

            {/* Search input */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-sm px-4 py-3 mb-6 shadow-sm focus-within:border-red-400 transition-colors">
              <MapPin size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Digite sua cidade, estado ou CEP..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 outline-none bg-transparent text-gray-700"
                style={{ fontSize: "0.875rem" }}
              />
              <button style={{ backgroundColor: "#CC0000" }} className="text-white p-1.5 rounded-sm">
                <Search size={15} />
              </button>
            </div>

            {/* Results list */}
            <div className="space-y-3">
              {dealers.map((dealer, i) => (
                <div key={i} className="bg-white rounded-lg border border-gray-100 p-4 hover:border-red-200 hover:shadow-sm transition-all cursor-pointer group">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-gray-900" style={{ fontSize: "0.9rem", fontWeight: 600 }}>{dealer.name}</span>
                        <span
                          className="px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: dealer.open ? "#E6F9F0" : "#FFF0F0",
                            color: dealer.open ? "#1D9A60" : "#CC0000",
                            fontSize: "0.65rem",
                            fontWeight: 700,
                          }}
                        >
                          {dealer.open ? "Aberto" : "Fechado"}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-2" style={{ fontSize: "0.8rem" }}>{dealer.city}, {dealer.state} • {dealer.distance}</p>
                      <a href={`tel:${dealer.phone}`} className="flex items-center gap-1 text-gray-500 hover:text-red-600 transition-colors" style={{ fontSize: "0.8rem" }}>
                        <Phone size={12} /> {dealer.phone}
                      </a>
                    </div>
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-red-500 mt-1 transition-colors flex-shrink-0" />
                  </div>
                </div>
              ))}
            </div>

            <a href="#" className="mt-4 flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
              Ver todas as concessionárias <ArrowRight size={14} />
            </a>
          </div>

          {/* Right: map placeholder */}
          <div className="lg:col-span-3">
            <div
              className="w-full rounded-xl overflow-hidden shadow-sm border border-gray-200 relative"
              style={{ height: "440px", background: "#E8EAED" }}
            >
              {/* Map mockup */}
              <img
                src="https://images.unsplash.com/photo-1568680870491-590cd4e224ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1000&q=80"
                alt="Mapa de concessionárias"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div style={{ backgroundColor: "#CC0000" }} className="w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <MapPin size={30} className="text-white" />
                </div>
                <p className="text-gray-700 mb-1" style={{ fontSize: "1rem", fontWeight: 600 }}>Visualização do Mapa</p>
                <p className="text-gray-500 text-center px-8" style={{ fontSize: "0.8rem" }}>
                  Digite seu endereço ou CEP para encontrar a concessionária YANMAR mais próxima
                </p>
                <button
                  style={{ backgroundColor: "#CC0000", fontSize: "0.875rem", fontWeight: 600 }}
                  className="mt-5 text-white px-6 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
                >
                  Usar minha localização
                </button>
              </div>

              {/* Pin markers mockup */}
              {[
                { top: "30%", left: "35%" },
                { top: "55%", left: "60%" },
                { top: "40%", left: "70%" },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-6 h-6 rounded-full border-2 border-white shadow"
                  style={{ top: pos.top, left: pos.left, backgroundColor: "#CC0000" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
