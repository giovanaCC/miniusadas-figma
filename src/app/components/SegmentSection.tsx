import { useState } from "react";
import { ArrowRight, Tractor, HardHat, Zap, Anchor } from "lucide-react";

const segments = [
  {
    id: "agro",
    label: "Agronegócio",
    icon: Tractor,
    description: "Tratores, colheitadeiras e implementos para máxima produtividade no campo.",
    image: "https://images.unsplash.com/photo-1696441567908-6a04d49e1350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    products: ["Tratores de Rodas", "Tratores de Esteira", "Colheitadeiras", "Implementos Agrícolas"],
    badge: "Mais Buscado",
  },
  {
    id: "construcao",
    label: "Construção Civil",
    icon: HardHat,
    description: "Miniescavadeiras e equipamentos compactos para obras urbanas e rurais.",
    image: "https://images.unsplash.com/photo-1495036019936-220b29b930ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    products: ["Miniescavadeiras", "Carregadeiras Compactas", "Rolo Compactador", "Multiopções"],
    badge: null,
  },
  {
    id: "energia",
    label: "Energia",
    icon: Zap,
    description: "Grupos geradores e motores diesel de alta eficiência para uso industrial e comercial.",
    image: "https://images.unsplash.com/photo-1614447428943-52ec0bdbc7aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    products: ["Grupos Geradores", "Motores Diesel", "Geradores Portáteis", "Soluções Industriais"],
    badge: null,
  },
  {
    id: "nautico",
    label: "Náutico",
    icon: Anchor,
    description: "Motores e propulsão marítima para embarcações comerciais e de lazer.",
    image: "https://images.unsplash.com/photo-1686675762628-2d2f2fdb2d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    products: ["Motores de Popa", "Motores de Centro", "Propulsão Elétrica", "Acessórios Náuticos"],
    badge: "Novidade",
  },
];

export function SegmentSection() {
  const [active, setActive] = useState("agro");
  const activeSegment = segments.find((s) => s.id === active)!;

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="mb-1" style={{ color: "#CC0000", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Nossos Segmentos
            </p>
            <h2 className="text-gray-900" style={{ fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.2 }}>
              Soluções para cada necessidade
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
            Ver todos os produtos <ArrowRight size={15} />
          </a>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
          {segments.map((seg) => {
            const Icon = seg.icon;
            const isActive = active === seg.id;
            return (
              <button
                key={seg.id}
                onClick={() => setActive(seg.id)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-sm whitespace-nowrap transition-all relative"
                style={{
                  backgroundColor: isActive ? "#CC0000" : "#F5F5F5",
                  color: isActive ? "#fff" : "#555",
                  fontWeight: isActive ? 600 : 500,
                  fontSize: "0.875rem",
                }}
              >
                <Icon size={16} />
                {seg.label}
                {seg.badge && (
                  <span
                    className="absolute -top-2 -right-2 text-white px-1.5 py-0.5 rounded-full"
                    style={{ backgroundColor: "#1C1C1C", fontSize: "0.6rem", fontWeight: 700 }}
                  >
                    {seg.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-xl overflow-hidden shadow-sm border border-gray-100">
          {/* Image */}
          <div className="relative overflow-hidden" style={{ minHeight: "320px" }}>
            <img
              src={activeSegment.image}
              alt={activeSegment.label}
              className="w-full h-full object-cover transition-all duration-500"
              style={{ minHeight: "320px" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5) 100%)" }} />
            <div className="absolute bottom-4 left-4">
              <span className="text-white" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{activeSegment.label}</span>
            </div>
          </div>

          {/* Info */}
          <div className="bg-gray-50 p-8 flex flex-col justify-between">
            <div>
              <p className="text-gray-600 mb-6" style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
                {activeSegment.description}
              </p>
              <p className="mb-3" style={{ fontSize: "0.8rem", fontWeight: 700, color: "#888", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Linha de Produtos
              </p>
              <ul className="space-y-2">
                {activeSegment.products.map((product) => (
                  <li key={product}>
                    <a
                      href="#"
                      className="flex items-center justify-between group py-2.5 px-4 bg-white rounded-md border border-gray-100 hover:border-red-200 hover:shadow-sm transition-all"
                    >
                      <span className="text-gray-700 group-hover:text-red-600 transition-colors" style={{ fontSize: "0.875rem", fontWeight: 500 }}>
                        {product}
                      </span>
                      <ArrowRight size={14} className="text-gray-300 group-hover:text-red-500 transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <button
              style={{ backgroundColor: "#CC0000", fontSize: "0.875rem", fontWeight: 600 }}
              className="mt-6 flex items-center justify-center gap-2 text-white py-3 rounded-sm hover:opacity-90 transition-opacity"
            >
              Ver toda a linha {activeSegment.label}
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
