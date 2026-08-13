import { ArrowRight, Clock, Tag } from "lucide-react";

const news = [
  {
    id: 1,
    category: "Agronegócio",
    categoryColor: "#2D7A2D",
    title: "YANMAR lança nova linha de tratores compactos para pequenas propriedades",
    excerpt: "A nova série YT3 chega ao Brasil com tecnologia avançada de transmissão e maior eficiência de combustível, ideal para propriedades de até 100 hectares.",
    image: "https://images.unsplash.com/photo-1606739211185-2c846d734a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    date: "18 Jun 2026",
    readTime: "4 min",
    featured: true,
  },
  {
    id: 2,
    category: "Construção",
    categoryColor: "#CC7700",
    title: "Miniescavadeiras YANMAR: a solução para obras em espaços urbanos reduzidos",
    excerpt: "Com tecnologia zero-tail-swing, as miniescavadeiras YANMAR revolucionam a construção civil em grandes centros urbanos.",
    image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    date: "12 Jun 2026",
    readTime: "3 min",
    featured: false,
  },
  {
    id: 3,
    category: "Sustentabilidade",
    categoryColor: "#0066AA",
    title: "YANMAR reforça compromisso com emissões zero até 2050 com novos motores híbridos",
    excerpt: "A fabricante japonesa apresenta seu roadmap de sustentabilidade e os primeiros modelos híbridos para o mercado brasileiro.",
    image: "https://images.unsplash.com/photo-1564868480822-32f714a0e763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80",
    date: "05 Jun 2026",
    readTime: "5 min",
    featured: false,
  },
];

export function NewsSection() {
  const [featured, ...rest] = news;

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="mb-1" style={{ color: "#CC0000", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Notícias & Novidades
            </p>
            <h2 className="text-gray-900" style={{ fontSize: "1.75rem", fontWeight: 700 }}>
              Fique por dentro do mundo YANMAR
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors" style={{ fontSize: "0.875rem", fontWeight: 600 }}>
            Ver todas as notícias <ArrowRight size={15} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured */}
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="relative overflow-hidden" style={{ height: "260px" }}>
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.6) 100%)" }} />
                <div className="absolute top-4 left-4">
                  <span
                    className="text-white px-2.5 py-1 rounded-sm"
                    style={{ backgroundColor: featured.categoryColor, fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}
                  >
                    {featured.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-gray-900 mb-3 group-hover:text-red-600 transition-colors" style={{ fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.35 }}>
                  {featured.title}
                </h3>
                <p className="text-gray-500 mb-4 flex-1" style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-gray-400" style={{ fontSize: "0.75rem" }}>
                    <span className="flex items-center gap-1"><Clock size={12} /> {featured.readTime} de leitura</span>
                    <span>{featured.date}</span>
                  </div>
                  <span className="flex items-center gap-1 text-red-600" style={{ fontSize: "0.8rem", fontWeight: 600 }}>
                    Ler mais <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Side news */}
          <div className="flex flex-col gap-5">
            {rest.map((article) => (
              <div key={article.id} className="group cursor-pointer rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow flex">
                <div className="relative overflow-hidden flex-shrink-0" style={{ width: "110px" }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Tag size={10} style={{ color: article.categoryColor }} />
                      <span style={{ color: article.categoryColor, fontSize: "0.68rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-gray-800 group-hover:text-red-600 transition-colors" style={{ fontSize: "0.85rem", fontWeight: 600, lineHeight: 1.35 }}>
                      {article.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2" style={{ fontSize: "0.72rem" }}>
                    <Clock size={11} /> {article.readTime} • {article.date}
                  </div>
                </div>
              </div>
            ))}

            {/* Newsletter CTA */}
            <div style={{ backgroundColor: "#CC0000" }} className="rounded-xl p-5">
              <p className="text-white mb-1" style={{ fontSize: "0.9rem", fontWeight: 700 }}>Receba as novidades</p>
              <p className="text-white/80 mb-3" style={{ fontSize: "0.78rem" }}>Assine nossa newsletter e fique por dentro de lançamentos e promoções.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 bg-white/20 text-white placeholder-white/60 px-3 py-2 rounded-sm outline-none border border-white/30"
                  style={{ fontSize: "0.8rem" }}
                />
                <button className="bg-white px-3 py-2 rounded-sm flex-shrink-0" style={{ color: "#CC0000", fontSize: "0.78rem", fontWeight: 700 }}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
