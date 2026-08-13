import { useState } from "react";
import { Link, useParams } from "react-router";
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, MessageSquare, Share2, Heart, CheckCircle2, ShieldCheck, Clock, ArrowRight } from "lucide-react";

const machinesData: Record<string, {
  id: string; name: string; year: number; hours: string;
  price: string; location: string; dealer: string;
  dealerPhone: string; dealerEmail: string;
  category: string; model: string;
  images: string[];
  mainInfo: { label: string; value: string }[];
  technicalInfo: { label: string; value: string }[];
}> = {
  "1": {
    id: "1",
    name: "Miniescavadeira YANMAR VIO55-6",
    year: 2021,
    hours: "1.100 h",
    price: "R$ 210.000",
    location: "São Paulo - SP",
    dealer: "Constru Tech SP",
    dealerPhone: "(11) 3344-5566",
    dealerEmail: "vendas@construtech.com.br",
    category: "Miniescavadeiras",
    model: "VIO55-6",
    images: [
      "https://images.unsplash.com/photo-1495036019936-220b29b930ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
      "https://images.unsplash.com/photo-1583024011792-b165975b52f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
      "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
      "https://images.unsplash.com/photo-1696441567908-6a04d49e1350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    ],
    mainInfo: [
      { label: "Modelo", value: "VIO55-6" },
      { label: "Ano", value: "2021" },
      { label: "Horas de uso", value: "1.100 horas" },
      { label: "Estado de conservação", value: "Bom" },
      { label: "Categoria", value: "Miniescavadeira" },
      { label: "Localização", value: "São Paulo - SP" },
    ],
    technicalInfo: [
      { label: "Peso operacional", value: "5.700 kg" },
      { label: "Potência do motor", value: "38,4 kW (51,5 CV)" },
      { label: "Motor", value: "YANMAR 4TNV94L" },
      { label: "Força de escavação (caçamba)", value: "44,1 kN" },
      { label: "Profundidade máx. de escavação", value: "3.840 mm" },
      { label: "Alcance máx. ao nível do solo", value: "6.450 mm" },
      { label: "Largura da caçamba", value: "600 mm" },
      { label: "Capacidade de giro", value: "360°" },
      { label: "Velocidade de translação", value: "2,6 / 4,6 km/h" },
      { label: "Pressão sobre o solo", value: "34,6 kPa" },
      { label: "Capacidade do tanque de combustível", value: "56 litros" },
    ],
  },
  "2": {
    id: "2",
    name: "Miniescavadeira YANMAR VIO27",
    year: 2022,
    hours: "450 h",
    price: "R$ 145.000",
    location: "Campinas - SP",
    dealer: "AgroSul Máquinas",
    dealerPhone: "(19) 3333-4444",
    dealerEmail: "contato@agrosul.com.br",
    category: "Miniescavadeiras",
    model: "VIO27",
    images: [
      "https://images.unsplash.com/photo-1583024011792-b165975b52f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
      "https://images.unsplash.com/photo-1495036019936-220b29b930ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
      "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    ],
    mainInfo: [
      { label: "Modelo", value: "VIO27" },
      { label: "Ano", value: "2022" },
      { label: "Horas de uso", value: "450 horas" },
      { label: "Estado de conservação", value: "Muito bom" },
      { label: "Categoria", value: "Miniescavadeira" },
      { label: "Localização", value: "Campinas - SP" },
    ],
    technicalInfo: [
      { label: "Peso operacional", value: "2.790 kg" },
      { label: "Potência do motor", value: "17,4 kW (23,3 CV)" },
      { label: "Motor", value: "YANMAR 3TNV70" },
      { label: "Força de escavação (caçamba)", value: "24,8 kN" },
      { label: "Profundidade máx. de escavação", value: "2.775 mm" },
      { label: "Alcance máx. ao nível do solo", value: "4.995 mm" },
      { label: "Largura da caçamba", value: "450 mm" },
      { label: "Capacidade de giro", value: "360°" },
      { label: "Velocidade de translação", value: "2,4 / 4,1 km/h" },
      { label: "Pressão sobre o solo", value: "27,2 kPa" },
      { label: "Capacidade do tanque de combustível", value: "28 litros" },
    ],
  },
  "5": {
    id: "5",
    name: "Mini Retroescavadeira YANMAR CBL40",
    year: 2018,
    hours: "2.200 h",
    price: "R$ 72.000",
    location: "Goiânia - GO",
    dealer: "Centro-Oeste Máquinas",
    dealerPhone: "(62) 3222-1100",
    dealerEmail: "vendas@centroeste.com.br",
    category: "Mini Retroescavadeiras",
    model: "CBL40",
    images: [
      "https://images.unsplash.com/photo-1696441567908-6a04d49e1350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
      "https://images.unsplash.com/photo-1563201515-adbe35c669c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
      "https://images.unsplash.com/photo-1568680870491-590cd4e224ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    ],
    mainInfo: [
      { label: "Modelo", value: "CBL40" },
      { label: "Ano", value: "2018" },
      { label: "Horas de uso", value: "2.200 horas" },
      { label: "Estado de conservação", value: "Regular" },
      { label: "Categoria", value: "Mini Retroescavadeira" },
      { label: "Localização", value: "Goiânia - GO" },
    ],
    technicalInfo: [
      { label: "Peso operacional", value: "4.100 kg" },
      { label: "Potência do motor", value: "40 CV" },
      { label: "Motor", value: "YANMAR 3TNV88" },
      { label: "Tração", value: "4x4" },
      { label: "Transmissão", value: "Hidrostática" },
      { label: "Capacidade de levante (frontal)", value: "1.800 kg" },
      { label: "Profundidade máx. de escavação", value: "3.500 mm" },
      { label: "Alcance máx. ao nível do solo", value: "5.200 mm" },
      { label: "Capacidade do tanque de combustível", value: "52 litros" },
      { label: "Pneus dianteiros", value: "11L-16" },
      { label: "Pneus traseiros", value: "19.5L-24" },
    ],
  },
};

const defaultMachine = machinesData["1"];

const relatedMachines = [
  { id: 2, name: "Miniescavadeira YANMAR VIO27", year: 2022, price: "R$ 145.000", category: "Miniescavadeiras", image: "https://images.unsplash.com/photo-1583024011792-b165975b52f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { id: 6, name: "Miniescavadeira YANMAR SV08", year: 2022, price: "R$ 98.000", category: "Miniescavadeiras", image: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
  { id: 5, name: "Mini Retroescavadeira YANMAR CBL40", year: 2018, price: "R$ 72.000", category: "Mini Retroescavadeiras", image: "https://images.unsplash.com/photo-1696441567908-6a04d49e1350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80" },
];

export function DetalhesMaquina() {
  const { id } = useParams();
  const machine = (id && machinesData[id]) ? machinesData[id] : defaultMachine;
  const [currentImg, setCurrentImg] = useState(0);
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    mensagem: "Olá, tenho interesse neste equipamento. Poderia me fornecer mais informações?",
  });

  return (
    <div style={{ backgroundColor: "#F7F7F7", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-gray-400" style={{ fontSize: "0.8rem" }}>
          <Link to="/" className="hover:text-red-600 transition-colors">Início</Link>
          <ChevronRight size={13} />
          <Link to="/maquinas" className="hover:text-red-600 transition-colors">Máquinas</Link>
          <ChevronRight size={13} />
          <span className="text-gray-700">{machine.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Gallery + info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Galeria de fotos */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative" style={{ height: "400px" }}>
                <img src={machine.images[currentImg]} alt={machine.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <button onClick={() => setSaved(!saved)} className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
                    <Heart size={16} fill={saved ? "#CC0000" : "none"} color={saved ? "#CC0000" : "#888"} />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
                    <Share2 size={16} className="text-gray-500" />
                  </button>
                </div>
                <button
                  onClick={() => setCurrentImg((i) => (i === 0 ? machine.images.length - 1 : i - 1))}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setCurrentImg((i) => (i === machine.images.length - 1 ? 0 : i + 1))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center"
                >
                  <ChevronRight size={18} />
                </button>
                <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-0.5 rounded text-xs">
                  {currentImg + 1}/{machine.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 p-3">
                {machine.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className="flex-1 overflow-hidden rounded"
                    style={{ height: "64px", outline: i === currentImg ? "2px solid #CC0000" : "none", opacity: i === currentImg ? 1 : 0.6 }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Informações principais */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-gray-900 mb-4" style={{ fontSize: "1.1rem", fontWeight: 700 }}>Informações principais</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {machine.mainInfo.map((info) => (
                  <div key={info.label}>
                    <p className="text-gray-400 mb-0.5" style={{ fontSize: "0.72rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{info.label}</p>
                    <p className="text-gray-800" style={{ fontSize: "0.9rem", fontWeight: 600 }}>{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Informações técnicas */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-gray-900 mb-4" style={{ fontSize: "1.1rem", fontWeight: 700 }}>Especificações técnicas</h2>
              <div className="divide-y divide-gray-50">
                {machine.technicalInfo.map((info) => (
                  <div key={info.label} className="flex items-center justify-between py-2.5">
                    <span className="text-gray-500" style={{ fontSize: "0.83rem" }}>{info.label}</span>
                    <span className="text-gray-800" style={{ fontSize: "0.83rem", fontWeight: 600 }}>{info.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dados da concessionária */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-gray-900 mb-4" style={{ fontSize: "1.1rem", fontWeight: 700 }}>Dados da concessionária</h2>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#CC0000" }}>
                  <span className="text-white" style={{ fontSize: "0.65rem", fontWeight: 800, textAlign: "center", lineHeight: 1.2 }}>YANMAR<br />AUTH</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 mb-1" style={{ fontSize: "1rem", fontWeight: 700 }}>{machine.dealer}</p>
                  <div className="flex items-center gap-1.5 text-gray-500 mb-3" style={{ fontSize: "0.8rem" }}>
                    <MapPin size={13} style={{ color: "#CC0000" }} /> {machine.location}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:${machine.dealerPhone}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-sm hover:border-red-300 hover:text-red-600 transition-colors text-gray-600"
                      style={{ fontSize: "0.78rem", fontWeight: 500 }}
                    >
                      <Phone size={13} /> {machine.dealerPhone}
                    </a>
                    <a
                      href={`mailto:${machine.dealerEmail}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-sm hover:border-red-300 hover:text-red-600 transition-colors text-gray-600"
                      style={{ fontSize: "0.78rem", fontWeight: 500 }}
                    >
                      <Mail size={13} /> E-mail
                    </a>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded" style={{ backgroundColor: "#E6F9F0" }}>
                  <ShieldCheck size={14} style={{ color: "#1D9A60" }} />
                  <span style={{ color: "#1D9A60", fontSize: "0.72rem", fontWeight: 700 }}>Autorizada YANMAR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Price + form */}
          <div className="space-y-5">
            {/* Price card */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="mb-2">
                <p className="text-gray-500 mb-0.5" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
                  {machine.category}
                </p>
                <h1 className="text-gray-900 mb-0.5" style={{ fontSize: "1.05rem", fontWeight: 800, lineHeight: 1.2 }}>{machine.name}</h1>
                <p className="text-gray-400" style={{ fontSize: "0.78rem" }}>{machine.year} · {machine.hours}</p>
              </div>
              <p className="mb-4 mt-3" style={{ fontSize: "1.8rem", fontWeight: 900, color: "#CC0000", lineHeight: 1 }}>{machine.price}</p>
              <div className="flex items-center gap-1.5 text-gray-500 mb-4" style={{ fontSize: "0.8rem" }}>
                <MapPin size={13} /> {machine.location}
              </div>
              <div className="space-y-2">
                {[
                  { icon: CheckCircle2, label: "Procedência verificada" },
                  { icon: ShieldCheck, label: "Laudo técnico disponível" },
                  { icon: Clock, label: "Resposta em até 2 horas úteis" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-gray-500" style={{ fontSize: "0.78rem" }}>
                    <Icon size={14} style={{ color: "#CC0000" }} /> {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Formulário de interesse */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h2 className="text-gray-900 mb-4" style={{ fontSize: "1rem", fontWeight: 700 }}>Tenho interesse nesta máquina</h2>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full border border-gray-200 rounded px-3 py-2.5 outline-none focus:border-red-400 transition-colors"
                  style={{ fontSize: "0.83rem" }}
                />
                <input
                  type="tel"
                  placeholder="Seu telefone / WhatsApp"
                  value={formData.telefone}
                  onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                  className="w-full border border-gray-200 rounded px-3 py-2.5 outline-none focus:border-red-400 transition-colors"
                  style={{ fontSize: "0.83rem" }}
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-200 rounded px-3 py-2.5 outline-none focus:border-red-400 transition-colors"
                  style={{ fontSize: "0.83rem" }}
                />
                <textarea
                  rows={3}
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  className="w-full border border-gray-200 rounded px-3 py-2.5 outline-none focus:border-red-400 transition-colors resize-none"
                  style={{ fontSize: "0.83rem" }}
                />
                <button
                  className="w-full text-white py-3 rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#CC0000", fontSize: "0.875rem", fontWeight: 700 }}
                >
                  <MessageSquare size={15} /> Enviar mensagem
                </button>
              </div>
            </div>

            {/* CTA de contato direto */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <p className="text-gray-600 mb-3 text-center" style={{ fontSize: "0.8rem" }}>Prefere falar diretamente?</p>
              <a
                href="tel:08007227777"
                className="flex items-center justify-center gap-2 w-full border-2 py-3 rounded-sm hover:bg-green-50 transition-colors"
                style={{ borderColor: "#1D9A60", color: "#1D9A60", fontSize: "0.9rem", fontWeight: 700 }}
              >
                <Phone size={16} /> Ligar agora
              </a>
            </div>
          </div>
        </div>

        {/* Máquinas relacionadas */}
        <div className="mt-10">
          <h2 className="text-gray-900 mb-5" style={{ fontSize: "1.3rem", fontWeight: 700 }}>Máquinas relacionadas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedMachines.map((m) => (
              <Link
                key={m.id}
                to={`/maquinas/${m.id}`}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md hover:border-red-100 transition-all group"
              >
                <div className="relative overflow-hidden" style={{ height: "150px" }}>
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span
                    className="absolute top-2.5 left-2.5 text-white px-2 py-0.5 rounded-sm"
                    style={{ backgroundColor: "#1C1C1C", fontSize: "0.62rem", fontWeight: 700, opacity: 0.85 }}
                  >
                    {m.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-gray-800 mb-1" style={{ fontSize: "0.85rem", fontWeight: 700 }}>{m.name}</h3>
                  <div className="flex items-center justify-between">
                    <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "#CC0000" }}>{m.price}</span>
                    <span className="text-gray-400" style={{ fontSize: "0.72rem" }}>{m.year}</span>
                  </div>
                  <p className="text-red-600 mt-2 flex items-center gap-0.5" style={{ fontSize: "0.75rem", fontWeight: 600 }}>
                    Ver detalhes <ArrowRight size={12} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
