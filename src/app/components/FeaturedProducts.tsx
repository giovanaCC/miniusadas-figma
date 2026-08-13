import { useState } from "react";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Trator YT347",
    segment: "Agronegócio",
    power: "47 CV",
    highlight: "Transmissão Hidrostática",
    image: "https://images.unsplash.com/photo-1563201515-adbe35c669c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    badge: "Mais Vendido",
    badgeColor: "#CC0000",
    rating: 4.9,
    reviews: 312,
    cta: "Ver Detalhes",
    specs: ["Motor 3 cilindros", "Tração 4x4", "Cabine com A/C"],
  },
  {
    id: 2,
    name: "Miniescavadeira VIO55",
    segment: "Construção",
    power: "38,5 kW",
    highlight: "Zero Swing Tail",
    image: "https://images.unsplash.com/photo-1583024011792-b165975b52f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    badge: "Lançamento",
    badgeColor: "#1C1C1C",
    rating: 4.8,
    reviews: 187,
    cta: "Ver Detalhes",
    specs: ["Força de escavação 40 kN", "Peso 5.600 kg", "Profundidade 3,74 m"],
  },
  {
    id: 3,
    name: "Motor 4TNV98",
    segment: "Industrial",
    power: "55 kW",
    highlight: "Emissão Tier 4 Final",
    image: "https://images.unsplash.com/photo-1624880403473-4244deee045a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    badge: null,
    badgeColor: "",
    rating: 4.7,
    reviews: 94,
    cta: "Ver Detalhes",
    specs: ["4 cilindros turbo", "Refrigerado a água", "Sistema common rail"],
  },
  {
    id: 4,
    name: "Motor Náutico 6LY400",
    segment: "Náutico",
    power: "400 CV",
    highlight: "Propulsão de Alta Eficiência",
    image: "https://images.unsplash.com/photo-1767640264892-3b5fbfd3e108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    badge: "Destaque",
    badgeColor: "#0066CC",
    rating: 4.9,
    reviews: 63,
    cta: "Ver Detalhes",
    specs: ["6 cilindros", "Injeção common rail", "Dupla turboalimentação"],
  },
  {
    id: 5,
    name: "Trator YT359",
    segment: "Agronegócio",
    power: "59 CV",
    highlight: "Alta Tração 4x4",
    image: "https://images.unsplash.com/photo-1564868480822-32f714a0e763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    badge: null,
    badgeColor: "",
    rating: 4.8,
    reviews: 228,
    cta: "Ver Detalhes",
    specs: ["Motor Diesel 4T", "Tração Total 4x4", "PTO 540/1000 rpm"],
  },
];

export function FeaturedProducts() {
  const [scrollIdx, setScrollIdx] = useState(0);
  const visible = 4;
  const canPrev = scrollIdx > 0;
  const canNext = scrollIdx + visible < products.length;

  return (
    <section style={{ backgroundColor: "#F7F7F7" }} className="py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="mb-1" style={{ color: "#CC0000", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Equipamentos em Destaque
            </p>
            <h2 className="text-gray-900" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
              Produtos mais procurados
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setScrollIdx((i) => Math.max(0, i - 1))}
              disabled={!canPrev}
              className="p-2 rounded-full border border-gray-200 hover:border-red-300 hover:text-red-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setScrollIdx((i) => Math.min(products.length - visible, i + 1))}
              disabled={!canNext}
              className="p-2 rounded-full border border-gray-200 hover:border-red-300 hover:text-red-600 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.slice(scrollIdx, scrollIdx + visible).map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group cursor-pointer"
            >
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height: "180px" }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span
                    className="absolute top-3 left-3 text-white px-2.5 py-1 rounded-sm"
                    style={{ backgroundColor: product.badgeColor, fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.05em" }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <span style={{ color: "#CC0000", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {product.segment}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={11} fill="#F5A623" color="#F5A623" />
                    <span className="text-gray-600" style={{ fontSize: "0.72rem", fontWeight: 500 }}>{product.rating} ({product.reviews})</span>
                  </div>
                </div>

                <h3 className="text-gray-900 mb-0.5" style={{ fontSize: "1rem", fontWeight: 700 }}>{product.name}</h3>
                <p className="text-gray-500 mb-3" style={{ fontSize: "0.8rem" }}>{product.highlight}</p>

                {/* Specs */}
                <ul className="space-y-1 mb-4">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-1.5 text-gray-500" style={{ fontSize: "0.75rem" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#CC0000", flexShrink: 0, display: "inline-block" }} />
                      {spec}
                    </li>
                  ))}
                </ul>

                {/* Power badge + CTA */}
                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-1 rounded"
                    style={{ backgroundColor: "#FFF0F0", color: "#CC0000", fontSize: "0.78rem", fontWeight: 700 }}
                  >
                    {product.power}
                  </span>
                  <button
                    className="flex items-center gap-1 transition-colors group-hover:text-red-600"
                    style={{ color: "#CC0000", fontSize: "0.8rem", fontWeight: 600 }}
                  >
                    {product.cta} <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-red-600 text-red-600 px-8 py-3 rounded-sm hover:bg-red-600 hover:text-white transition-all"
            style={{ fontSize: "0.875rem", fontWeight: 600 }}
          >
            Ver catálogo completo <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
