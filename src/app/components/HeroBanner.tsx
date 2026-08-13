import { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    tag: "Lançamento",
    headline: "Potência e Precisão no Campo",
    subheadline: "A nova linha de tratores YANMAR combina tecnologia de ponta com eficiência comprovada para maximizar sua produtividade.",
    cta: "Conhecer a Linha Agro",
    ctaSecondary: "Ver Especificações",
    image: "https://images.unsplash.com/photo-1606739211185-2c846d734a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80",
    accent: "#CC0000",
  },
  {
    id: 2,
    tag: "Construção Civil",
    headline: "Equipamentos que Constroem o Futuro",
    subheadline: "Miniescavadeiras e equipamentos compactos YANMAR para obras urbanas e rurais. Desempenho superior em qualquer terreno.",
    cta: "Ver Equipamentos",
    ctaSecondary: "Solicitar Demonstração",
    image: "https://images.unsplash.com/photo-1495036019936-220b29b930ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80",
    accent: "#CC0000",
  },
  {
    id: 3,
    tag: "Segmento Náutico",
    headline: "Motores que Dominam os Mares",
    subheadline: "Motores marítimos YANMAR: confiabilidade e performance para embarcações comerciais e de lazer.",
    cta: "Explorar Linha Náutica",
    ctaSecondary: "Falar com Especialista",
    image: "https://images.unsplash.com/photo-1686675762628-2d2f2fdb2d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80",
    accent: "#CC0000",
  },
];

export function HeroBanner() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "580px" }}>
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url('${slide.image}')` }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.05) 100%)" }} />

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-xl">
          {/* Tag */}
          <span
            className="inline-block text-white px-3 py-1 rounded-sm mb-4"
            style={{ backgroundColor: "#CC0000", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
          >
            {slide.tag}
          </span>

          {/* Headline */}
          <h1 className="text-white mb-4" style={{ fontSize: "2.75rem", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.01em" }}>
            {slide.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-white/85 mb-8" style={{ fontSize: "1rem", lineHeight: 1.6, fontWeight: 400 }}>
            {slide.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              style={{ backgroundColor: "#CC0000", fontSize: "0.9rem", fontWeight: 600 }}
              className="flex items-center gap-2 text-white px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
            >
              {slide.cta}
              <ArrowRight size={16} />
            </button>
            <button
              className="flex items-center gap-2 text-white border border-white/50 px-6 py-3 rounded-sm hover:bg-white/10 transition-colors"
              style={{ fontSize: "0.9rem", fontWeight: 500 }}
            >
              {slide.ctaSecondary}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2.5 rounded-full transition-colors z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2.5 rounded-full transition-colors z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              backgroundColor: i === current ? "#CC0000" : "rgba(255,255,255,0.5)",
            }}
          />
        ))}
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-stretch divide-x divide-white/15">
            {[
              { value: "130+", label: "Anos de Inovação" },
              { value: "50+", label: "Países atendidos" },
              { value: "1.200+", label: "Concessionárias no Brasil" },
              { value: "99,2%", label: "Satisfação dos Clientes" },
            ].map((stat) => (
              <div key={stat.label} className="flex-1 py-3 px-4 text-center">
                <div className="text-white" style={{ fontSize: "1.2rem", fontWeight: 700 }}>{stat.value}</div>
                <div className="text-white/60" style={{ fontSize: "0.7rem", fontWeight: 400 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
