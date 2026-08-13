import { useEffect, useState } from "react";
import { Link } from "react-router";
import {
  Search, MapPin, ArrowRight, ChevronRight,
  ShieldCheck, Clock, Star, Tractor, HardHat, Zap, Anchor, CheckCircle2,
  Tag, Wrench, Users, BarChart3
} from "lucide-react";
import { listingsApi } from "../api";
import { MachineCardData, toMachineCard } from "../machineAdapter";

// ── Hero ──────────────────────────────────────────────────────────────────────
function HeroSearch() {
  const [tipo, setTipo] = useState("Todos");
  const [categoria, setCategoria] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [preco, setPreco] = useState("");

  return (
    <section
      className="relative w-full"
      style={{
        background: "linear-gradient(135deg, #1C1C1C 0%, #2D2D2D 60%, #3D1A1A 100%)",
        minHeight: "480px",
      }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606739211185-2c846d734a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1600&q=80')" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        {/* Badge */}
        <span
          className="inline-block text-white px-3 py-1 rounded-full mb-5"
          style={{ backgroundColor: "#CC0000", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}
        >
          Marketplace Oficial YANMAR
        </span>

        <h1 className="text-white mb-3" style={{ fontSize: "2.5rem", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
          Compre e venda máquinas<br />YANMAR com segurança
        </h1>
        <p className="text-white/70 mb-10" style={{ fontSize: "1rem", lineHeight: 1.6, maxWidth: "520px" }}>
          Tratores, escavadeiras e equipamentos usados, em demonstração ou locação. Direto das concessionárias autorizadas.
        </p>

        {/* Search card */}
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Tipo tabs */}
          <div style={{ backgroundColor: "#F7F7F7", borderBottom: "1px solid #E8E8E8" }} className="flex">
            {["Todos", "Usada", "Demonstração", "Locação"].map((t) => (
              <button
                key={t}
                onClick={() => setTipo(t)}
                className="flex-1 py-3 transition-all"
                style={{
                  fontSize: "0.82rem",
                  fontWeight: tipo === t ? 700 : 500,
                  color: tipo === t ? "#CC0000" : "#666",
                  borderBottom: tipo === t ? "2px solid #CC0000" : "2px solid transparent",
                  backgroundColor: tipo === t ? "#fff" : "transparent",
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Filters row */}
          <div className="flex flex-col sm:flex-row items-stretch gap-0 p-0">
            <div className="flex-1 flex items-center gap-2 px-4 py-3.5 border-b sm:border-b-0 sm:border-r border-gray-100">
              <Tractor size={16} className="text-gray-400 flex-shrink-0" />
              <select
                className="flex-1 bg-transparent outline-none text-gray-700"
                style={{ fontSize: "0.875rem" }}
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="">Categoria</option>
                <option>Tratores de Rodas</option>
                <option>Tratores de Esteira</option>
                <option>Miniescavadeiras</option>
                <option>Colheitadeiras</option>
                <option>Motores Diesel</option>
                <option>Grupos Geradores</option>
                <option>Motores Náuticos</option>
              </select>
            </div>

            <div className="flex-1 flex items-center gap-2 px-4 py-3.5 border-b sm:border-b-0 sm:border-r border-gray-100">
              <MapPin size={16} className="text-gray-400 flex-shrink-0" />
              <select
                className="flex-1 bg-transparent outline-none text-gray-700"
                style={{ fontSize: "0.875rem" }}
                value={localizacao}
                onChange={(e) => setLocalizacao(e.target.value)}
              >
                <option value="">Localização</option>
                <option>São Paulo - SP</option>
                <option>Campinas - SP</option>
                <option>Curitiba - PR</option>
                <option>Porto Alegre - RS</option>
                <option>Belo Horizonte - MG</option>
                <option>Goiânia - GO</option>
                <option>Brasília - DF</option>
              </select>
            </div>

            <div className="flex-1 flex items-center gap-2 px-4 py-3.5 border-b sm:border-b-0 sm:border-r border-gray-100">
              <Tag size={16} className="text-gray-400 flex-shrink-0" />
              <select
                className="flex-1 bg-transparent outline-none text-gray-700"
                style={{ fontSize: "0.875rem" }}
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              >
                <option value="">Faixa de preço</option>
                <option>Até R$ 50.000</option>
                <option>R$ 50.000 – R$ 150.000</option>
                <option>R$ 150.000 – R$ 400.000</option>
                <option>Acima de R$ 400.000</option>
              </select>
            </div>

            <Link
              to="/maquinas"
              className="flex items-center justify-center gap-2 px-6 py-3.5 text-white flex-shrink-0"
              style={{ backgroundColor: "#CC0000", fontWeight: 700, fontSize: "0.9rem", minWidth: "140px" }}
            >
              <Search size={16} /> Buscar
            </Link>
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex items-center gap-6 mt-8">
          {[
            { value: "2.400+", label: "Máquinas disponíveis" },
            { value: "340+", label: "Concessionárias" },
            { value: "98%", label: "Clientes satisfeitos" },
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
const fallbackFeaturedMachines: MachineCardData[] = [
  {
    id: 1,
    name: "Trator YANMAR YT347",
    year: 2022,
    hours: "320 h",
    condition: "Usada",
    conditionColor: "#2D7A2D",
    price: "R$ 148.000",
    location: "Campinas - SP",
    image: "https://images.unsplash.com/photo-1563201515-adbe35c669c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
    dealer: "AgroSul Máquinas",
    rating: 4.9,
    badge: "Destaque",
  },
  {
    id: 2,
    name: "Miniescavadeira YANMAR VIO55",
    year: 2021,
    hours: "1.100 h",
    condition: "Usada",
    conditionColor: "#2D7A2D",
    price: "R$ 210.000",
    location: "São Paulo - SP",
    image: "https://images.unsplash.com/photo-1495036019936-220b29b930ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
    dealer: "Constru Tech SP",
    rating: 4.7,
    badge: null,
  },
  {
    id: 3,
    name: "Trator YANMAR YT359",
    year: 2023,
    hours: "80 h",
    condition: "Demonstração",
    conditionColor: "#0066CC",
    price: "R$ 185.000",
    location: "Ribeirão Preto - SP",
    image: "https://images.unsplash.com/photo-1564868480822-32f714a0e763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
    dealer: "YANMAR Agro Ribeirão",
    rating: 5.0,
    badge: "Demo",
  },
  {
    id: 4,
    name: "Motor Náutico YANMAR 6LY",
    year: 2020,
    hours: "620 h",
    condition: "Usada",
    conditionColor: "#2D7A2D",
    price: "R$ 95.000",
    location: "Santos - SP",
    image: "https://images.unsplash.com/photo-1686675762628-2d2f2fdb2d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
    dealer: "Náutica Sul",
    rating: 4.8,
    badge: null,
  },
  {
    id: 5,
    name: "Escavadeira YANMAR SV100",
    year: 2022,
    hours: "450 h",
    condition: "Locação",
    conditionColor: "#8B4A00",
    price: "R$ 8.500/mês",
    location: "Curitiba - PR",
    image: "https://images.unsplash.com/photo-1583024011792-b165975b52f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
    dealer: "Constru Paraná",
    rating: 4.6,
    badge: "Locação",
  },
  {
    id: 6,
    name: "Grupo Gerador YANMAR YDG5500",
    year: 2021,
    hours: "280 h",
    condition: "Usada",
    conditionColor: "#2D7A2D",
    price: "R$ 28.500",
    location: "Porto Alegre - RS",
    image: "https://images.unsplash.com/photo-1523559094051-53bac879eb80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=500&q=80",
    dealer: "Energia Sul RS",
    rating: 4.5,
    badge: null,
  },
];

function MachineCard({ machine }: { machine: MachineCardData }) {
  return (
    <Link
      to={`/maquinas/${machine.id}`}
      className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md hover:border-red-100 transition-all group block"
    >
      {/* Image */}
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
              backgroundColor: machine.badge === "Demo" ? "#0066CC" : machine.badge === "Locação" ? "#8B4A00" : "#CC0000",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            {machine.badge}
          </span>
        )}
        <span
          className="absolute top-3 right-3 text-white px-2 py-0.5 rounded-sm"
          style={{ backgroundColor: machine.conditionColor, fontSize: "0.68rem", fontWeight: 700 }}
        >
          {machine.condition}
        </span>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-gray-900 mb-1" style={{ fontSize: "0.9rem", fontWeight: 700, lineHeight: 1.3 }}>
          {machine.name}
        </h3>
        <p className="text-gray-400 mb-3" style={{ fontSize: "0.75rem" }}>
          {machine.year} · {machine.hours} · <MapPin size={11} className="inline" /> {machine.location}
        </p>

        <div className="flex items-center justify-between mb-3">
          <span style={{ fontSize: "1.05rem", fontWeight: 800, color: "#CC0000" }}>{machine.price}</span>
          <div className="flex items-center gap-1">
            <Star size={11} fill="#F5A623" color="#F5A623" />
            <span className="text-gray-500" style={{ fontSize: "0.72rem" }}>{machine.rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400" style={{ fontSize: "0.72rem" }}>{machine.dealer}</span>
          <span className="text-red-600 flex items-center gap-0.5 group-hover:gap-1.5 transition-all" style={{ fontSize: "0.78rem", fontWeight: 600 }}>
            Ver detalhes <ChevronRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ── Categorias ────────────────────────────────────────────────────────────────
const categories = [
  { icon: Tractor, label: "Tratores de Rodas", count: 487 },
  { icon: HardHat, label: "Miniescavadeiras", count: 312 },
  { icon: Tractor, label: "Colheitadeiras", count: 194 },
  { icon: Zap, label: "Grupos Geradores", count: 276 },
  { icon: Wrench, label: "Motores Diesel", count: 341 },
  { icon: Anchor, label: "Motores Náuticos", count: 158 },
];

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
    description: "Laudos técnicos e relatórios de revisão disponíveis antes da compra.",
  },
  {
    icon: Users,
    title: "Suporte dedicado",
    description: "Nossa equipe acompanha todo o processo até a conclusão da negociação.",
  },
  {
    icon: BarChart3,
    title: "Preço justo",
    description: "Preços de mercado baseados em avaliação técnica e valores de referência YANMAR.",
  },
];

// ── Como Funciona ─────────────────────────────────────────────────────────────
const steps = [
  { number: "01", title: "Busque sua máquina", description: "Use nossos filtros para encontrar exatamente o modelo, ano e condição que você precisa." },
  { number: "02", title: "Analise os detalhes", description: "Confira a galeria de fotos, informações técnicas, laudo de revisão e dados da concessionária." },
  { number: "03", title: "Demonstre interesse", description: "Preencha o formulário ou entre em contato direto com a concessionária autorizada." },
  { number: "04", title: "Feche o negócio", description: "Com segurança e transparência, conclua a compra ou contrato de locação." },
];

// ── Page ──────────────────────────────────────────────────────────────────────
export function Home() {
  const [featuredMachines, setFeaturedMachines] = useState<MachineCardData[]>(fallbackFeaturedMachines);

  useEffect(() => {
    listingsApi.list({ limit: 5 })
      .then((response) => {
        if (response.data.length) setFeaturedMachines(response.data.map(toMachineCard));
      })
      .catch(() => undefined);
  }, []);

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
                Equipamentos mais recentes
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

      {/* 3. Principais categorias */}
      <section style={{ backgroundColor: "#F7F7F7" }} className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <p style={{ color: "#CC0000", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-1">
              Categorias
            </p>
            <h2 className="text-gray-900" style={{ fontSize: "1.6rem", fontWeight: 700 }}>
              Principais categorias
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.label}
                  to="/maquinas"
                  className="bg-white rounded-xl p-4 flex flex-col items-center text-center hover:shadow-md hover:border-red-200 border border-gray-100 transition-all group"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3 group-hover:bg-red-50 transition-colors"
                    style={{ backgroundColor: "#FFF0F0" }}
                  >
                    <Icon size={22} style={{ color: "#CC0000" }} />
                  </div>
                  <p className="text-gray-800 mb-1" style={{ fontSize: "0.8rem", fontWeight: 600, lineHeight: 1.3 }}>{cat.label}</p>
                  <p style={{ color: "#CC0000", fontSize: "0.72rem", fontWeight: 700 }}>{cat.count} anúncios</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Benefícios da plataforma */}
      <section className="bg-white py-12">
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
                <div key={b.title} className="p-6 rounded-xl border border-gray-100 hover:border-red-100 hover:shadow-sm transition-all">
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

      {/* 5. Como funciona */}
      <section style={{ backgroundColor: "#1C1C1C" }} className="py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p style={{ color: "#CC0000", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-1">
              Passo a passo
            </p>
            <h2 className="text-white" style={{ fontSize: "1.6rem", fontWeight: 700 }}>
              Como funciona
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

      {/* 6. CTA Visualizar + 7. CTA Anunciar */}
      <section style={{ backgroundColor: "#F7F7F7" }} className="py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* CTA visualizar equipamentos */}
          <div
            className="rounded-xl overflow-hidden relative flex items-end p-8"
            style={{
              minHeight: "260px",
              backgroundImage: "url('https://images.unsplash.com/photo-1696441567908-6a04d49e1350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 20%, rgba(0,0,0,0.75) 100%)" }} />
            <div className="relative">
              <p className="text-white/80 mb-1" style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Para compradores
              </p>
              <h3 className="text-white mb-4" style={{ fontSize: "1.4rem", fontWeight: 800 }}>
                Encontre a máquina<br />ideal para seu negócio
              </h3>
              <Link
                to="/maquinas"
                className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#CC0000", fontSize: "0.875rem", fontWeight: 700 }}
              >
                Ver equipamentos <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* CTA anunciar */}
          <div
            className="rounded-xl p-8 flex flex-col justify-between"
            style={{ backgroundColor: "#CC0000", minHeight: "260px" }}
          >
            <div>
              <p className="text-white/80 mb-1" style={{ fontSize: "0.8rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Para concessionárias
              </p>
              <h3 className="text-white mb-3" style={{ fontSize: "1.4rem", fontWeight: 800 }}>
                Anuncie suas máquinas<br />para todo o Brasil
              </h3>
              <p className="text-white/80 mb-6" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                Alcance milhares de compradores qualificados. Processo simples e aprovação rápida.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/anunciar"
                className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-sm hover:bg-gray-100 transition-colors"
                style={{ color: "#CC0000", fontSize: "0.875rem", fontWeight: 700 }}
              >
                Quero anunciar <ArrowRight size={14} />
              </Link>
              <Link
                to="/sobre"
                className="text-white/80 hover:text-white transition-colors"
                style={{ fontSize: "0.83rem", fontWeight: 500 }}
              >
                Saiba mais
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
