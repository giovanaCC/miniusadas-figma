import { useState } from "react";
import { Link } from "react-router";
import {
  Search, MapPin, ArrowRight,
  ShieldCheck, CheckCircle2, Users, BarChart3, Tag
} from "lucide-react";

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroSearch() {
  const [categoria, setCategoria] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [preco, setPreco] = useState("");

  return (
    <section
      className="relative w-full"
      style={{
        background: "linear-gradient(135deg, #1C1C1C 0%, #2D2D2D 60%, #3D1A1A 100%)",
        minHeight: "460px",
      }}
    >
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606739211185-2c846d734a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80')" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <span
          className="inline-block text-white px-3 py-1 rounded-full mb-5"
          style={{ backgroundColor: "#CC0000", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          Marketplace Oficial YANMAR
        </span>

        <h1 className="text-white mb-3" style={{ fontSize: "2.5rem", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
          Encontre a sua máquina<br />YANMAR com segurança
        </h1>
        <p className="text-white/70 mb-10" style={{ fontSize: "1rem", lineHeight: 1.6, maxWidth: "520px" }}>
          Miniescavadeiras, mini pás carregadeiras e mini retroescavadeiras. Direto das concessionárias autorizadas YANMAR.
        </p>

        {/* Search card */}
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="flex flex-col sm:flex-row items-stretch gap-0 p-0">
            <div className="flex-1 flex items-center gap-2 px-4 py-4 border-b sm:border-b-0 sm:border-r border-gray-100">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 17H5a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v0a2 2 0 0 0-2-2h-4" />
                <path d="M9 3H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
              <select
                className="flex-1 bg-transparent outline-none text-gray-700"
                style={{ fontSize: "0.875rem" }}
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">Categoria</option>
                <option>Miniescavadeiras</option>
                <option>Mini Pás Carregadeiras</option>
                <option>Mini Retroescavadeiras</option>
              </select>
            </div>

            <div className="flex-1 flex items-center gap-2 px-4 py-4 border-b sm:border-b-0 sm:border-r border-gray-100">
              <MapPin size={16} className="text-gray-400 flex-shrink-0" />
              <select
                className="flex-1 bg-transparent outline-none text-gray-700"
                style={{ fontSize: "0.875rem" }}
                value={localizacao}
                onChange={(e) => setLocalizacao(e.target.value)}
              >
                <option value="">Região / Localização</option>
                <option>São Paulo - SP</option>
                <option>Campinas - SP</option>
                <option>Curitiba - PR</option>
                <option>Porto Alegre - RS</option>
                <option>Belo Horizonte - MG</option>
                <option>Goiânia - GO</option>
                <option>Brasília - DF</option>
                <option>Florianópolis - SC</option>
              </select>
            </div>

            <div className="flex-1 flex items-center gap-2 px-4 py-4 border-b sm:border-b-0 sm:border-r border-gray-100">
              <Tag size={16} className="text-gray-400 flex-shrink-0" />
              <select
                className="flex-1 bg-transparent outline-none text-gray-700"
                style={{ fontSize: "0.875rem" }}
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              >
                <option value="">Faixa de preço</option>
                <option>Até R$ 80.000</option>
                <option>R$ 80.000 – R$ 150.000</option>
                <option>R$ 150.000 – R$ 300.000</option>
                <option>Acima de R$ 300.000</option>
              </select>
            </div>

            <Link
              to="/maquinas"
              className="flex items-center justify-center gap-2 px-6 py-4 text-white flex-shrink-0"
              style={{ backgroundColor: "#CC0000", fontWeight: 700, fontSize: "0.9rem", minWidth: "160px" }}
            >
              <Search size={16} /> Buscar
            </Link>
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex items-center gap-8 mt-8">
          {[
            { value: "180+", label: "Máquinas disponíveis" },
            { value: "42", label: "Concessionárias autorizadas" },
            { value: "100%", label: "Procedência verificada" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-white" style={{ fontSize: "1.2rem", fontWeight: 800 }}>{s.value}</div>
              <div className="text-white/50" style={{ fontSize: "0.72rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Machine data ──────────────────────────────────────────────────────────────
const featuredMachines = [
  {
    id: 1,
    name: "Miniescavadeira YANMAR VIO55-6",
    year: 2021,
    hours: "1.100 h",
    price: "R$ 210.000",
    location: "São Paulo - SP",
    image: "https://images.unsplash.com/photo-1495036019936-220b29b930ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
    dealer: "Constru Tech SP",
    badge: "Destaque",
  },
  {
    id: 2,
    name: "Miniescavadeira YANMAR VIO27",
    year: 2022,
    hours: "450 h",
    price: "R$ 145.000",
    location: "Campinas - SP",
    image: "https://images.unsplash.com/photo-1583024011792-b165975b52f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
    dealer: "AgroSul Máquinas",
    badge: null,
  },
  {
    id: 3,
    name: "Mini Pá Carregadeira YANMAR V4-3",
    year: 2020,
    hours: "890 h",
    price: "R$ 128.000",
    location: "Curitiba - PR",
    image: "https://images.unsplash.com/photo-1563201515-adbe35c669c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
    dealer: "Constru Paraná",
    badge: null,
  },
  {
    id: 4,
    name: "Mini Pá Carregadeira YANMAR V3-3",
    year: 2019,
    hours: "1.400 h",
    price: "R$ 85.000",
    location: "Porto Alegre - RS",
    image: "https://images.unsplash.com/photo-1564868480822-32f714a0e763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
    dealer: "Maquinários Sul RS",
    badge: null,
  },
  {
    id: 5,
    name: "Mini Retroescavadeira YANMAR CBL40",
    year: 2018,
    hours: "2.200 h",
    price: "R$ 72.000",
    location: "Goiânia - GO",
    image: "https://images.unsplash.com/photo-1696441567908-6a04d49e1350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
    dealer: "Centro-Oeste Máquinas",
    badge: "Oportunidade",
  },
  {
    id: 6,
    name: "Miniescavadeira YANMAR SV08",
    year: 2022,
    hours: "220 h",
    price: "R$ 98.000",
    location: "Florianópolis - SC",
    image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
    dealer: "Constru Catarinense",
    badge: null,
  },
];

function MachineCard({ machine }: { machine: typeof featuredMachines[0] }) {
  return (
    <Link
      to={`/maquinas/${machine.id}`}
      className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md hover:border-red-100 transition-all group block"
    >
      <div className="relative overflow-hidden" style={{ height: "180px" }}>
        <img
          src={machine.image}
          alt={machine.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {machine.badge && (
          <span
            className="absolute top-3 left-3 text-white px-2 py-0.5 rounded-sm"
            style={{
              backgroundColor: machine.badge === "Oportunidade" ? "#7B5EA7" : "#CC0000",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            {machine.badge}
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-gray-900 mb-1" style={{ fontSize: "0.9rem", fontWeight: 700, lineHeight: 1.3 }}>
          {machine.name}
        </h3>
        <p className="text-gray-400 mb-3" style={{ fontSize: "0.75rem" }}>
          {machine.year} · {machine.hours} · <MapPin size={11} className="inline" /> {machine.location}
        </p>

        <div className="flex items-center justify-between">
          <span style={{ fontSize: "1.05rem", fontWeight: 800, color: "#CC0000" }}>{machine.price}</span>
          <span className="text-red-600 flex items-center gap-0.5 group-hover:gap-1.5 transition-all" style={{ fontSize: "0.78rem", fontWeight: 600 }}>
            Ver detalhes <ArrowRight size={13} />
          </span>
        </div>

        <p className="text-gray-400 mt-2" style={{ fontSize: "0.72rem" }}>{machine.dealer}</p>
      </div>
    </Link>
  );
}

// ── Benefícios ────────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: ShieldCheck,
    title: "Procedência garantida",
    description: "Todas as máquinas são listadas por concessionárias YANMAR autorizadas, com histórico completo.",
  },
  {
    icon: CheckCircle2,
    title: "Inspeção técnica",
    description: "Laudos técnicos e relatórios de revisão disponíveis antes da negociação.",
  },
  {
    icon: Users,
    title: "Suporte dedicado",
    description: "Nossa equipe acompanha todo o processo até a conclusão da negociação.",
  },
  {
    icon: BarChart3,
    title: "Preço justo",
    description: "Preços baseados em avaliação técnica e valores de referência YANMAR.",
  },
];

// ── Como Funciona ─────────────────────────────────────────────────────────────
const steps = [
  { number: "01", title: "Busque sua máquina", description: "Use os filtros para encontrar exatamente o modelo, ano e região que você precisa." },
  { number: "02", title: "Analise os detalhes", description: "Confira a galeria de fotos, especificações técnicas, laudo de revisão e dados da concessionária." },
  { number: "03", title: "Demonstre interesse", description: "Preencha o formulário ou entre em contato direto com a concessionária autorizada." },
  { number: "04", title: "Feche o negócio", description: "Com segurança e transparência, conclua a compra com respaldo YANMAR." },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export function Home() {
  return (
    <div>
      {/* 1. Banner com busca rápida */}
      <HeroSearch />

      {/* 2. Máquinas em destaque */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-7">
            <div>
              <p style={{ color: "#CC0000", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-1">
                Máquinas em Destaque
              </p>
              <h2 className="text-gray-900" style={{ fontSize: "1.6rem", fontWeight: 700 }}>
                Equipamentos recém adicionados
              </h2>
            </div>
            <Link
              to="/maquinas"
              className="hidden md:flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors"
              style={{ fontSize: "0.85rem", fontWeight: 600 }}
            >
              Ver todas as máquinas <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredMachines.map((m) => (
              <MachineCard key={m.id} machine={m} />
            ))}
          </div>

          <div className="text-center mt-7">
            <Link
              to="/maquinas"
              className="inline-flex items-center gap-2 border border-red-600 text-red-600 px-7 py-2.5 rounded-sm hover:bg-red-600 hover:text-white transition-all"
              style={{ fontSize: "0.875rem", fontWeight: 600 }}
            >
              Ver catálogo completo <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Benefícios da plataforma */}
      <section style={{ backgroundColor: "#F7F7F7" }} className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p style={{ color: "#CC0000", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-1">
              Por que a Miniusadas
            </p>
            <h2 className="text-gray-900" style={{ fontSize: "1.6rem", fontWeight: 700 }}>
              Benefícios da plataforma
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="p-6 rounded-xl border border-gray-100 bg-white hover:border-red-100 hover:shadow-sm transition-all">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "#FFF0F0" }}>
                    <Icon size={20} style={{ color: "#CC0000" }} />
                  </div>
                  <h3 className="text-gray-900 mb-2" style={{ fontSize: "0.95rem", fontWeight: 700 }}>{b.title}</h3>
                  <p className="text-gray-500" style={{ fontSize: "0.83rem", lineHeight: 1.65 }}>{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Como funciona */}
      <section style={{ backgroundColor: "#1C1C1C" }} className="py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p style={{ color: "#CC0000", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-1">
              Passo a passo
            </p>
            <h2 className="text-white" style={{ fontSize: "1.6rem", fontWeight: 700 }}>
              Como funciona para o comprador
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, i) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 flex-shrink-0"
                  style={{ backgroundColor: "#CC0000" }}
                >
                  <span className="text-white" style={{ fontSize: "1.1rem", fontWeight: 800 }}>{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-7 left-[calc(50%+28px)] right-0"
                    style={{ height: "2px", backgroundColor: "rgba(204,0,0,0.3)", width: "calc(100% - 56px)" }}
                  />
                )}
                <h3 className="text-white mb-2" style={{ fontSize: "0.95rem", fontWeight: 700 }}>{step.title}</h3>
                <p className="text-white/55" style={{ fontSize: "0.82rem", lineHeight: 1.65 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Principal */}
      <section style={{ backgroundColor: "#F7F7F7" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="rounded-xl overflow-hidden relative flex items-end p-10"
            style={{
              minHeight: "300px",
              backgroundImage: "url('https://images.unsplash.com/photo-1696441567908-6a04d49e1350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 10%, rgba(0,0,0,0.80) 100%)" }} />
            <div className="relative max-w-xl">
              <p className="text-white/80 mb-2" style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Para compradores
              </p>
              <h3 className="text-white mb-5" style={{ fontSize: "2rem", fontWeight: 800, lineHeight: 1.15 }}>
                Encontre a máquina ideal<br />para o seu negócio
              </h3>
              <p className="text-white/75 mb-6" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
                Mini escavadeiras, mini pás carregadeiras e mini retroescavadeiras com procedência garantida por concessionárias autorizadas YANMAR.
              </p>
              <Link
                to="/maquinas"
                className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#CC0000", fontSize: "0.95rem", fontWeight: 700 }}
              >
                Ver todos os equipamentos <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
