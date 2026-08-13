import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { ChevronLeft, ChevronRight, MapPin, Star, Phone, Mail, MessageSquare, Share2, Heart, CheckCircle2, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { formatPrice, listingsApi } from "../api";
import { fallbackMachineImage } from "../machineAdapter";

const fallbackMachineData = {
  id: "1",
  name: "Trator YANMAR YT347",
  year: 2022,
  hours: "320 h",
  condition: "Usada",
  conditionColor: "#2D7A2D",
  price: "R$ 148.000",
  location: "Campinas - SP",
  dealer: "AgroSul Máquinas",
  dealerPhone: "(19) 3333-4444",
  dealerEmail: "contato@agrosul.com.br",
  dealerRating: 4.9,
  dealerReviews: 127,
  rating: 4.9,
  category: "Tratores de Rodas",
  model: "YT347",
  images: [
    "https://images.unsplash.com/photo-1563201515-adbe35c669c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    "https://images.unsplash.com/photo-1606739211185-2c846d734a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    "https://images.unsplash.com/photo-1564868480822-32f714a0e763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
    "https://images.unsplash.com/photo-1696441567908-6a04d49e1350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80",
  ],
  mainInfo: [
    { label: "Modelo", value: "YT347" },
    { label: "Ano", value: "2022" },
    { label: "Horas de uso", value: "320 horas" },
    { label: "Estado de conservação", value: "Muito bom" },
    { label: "Tipo de oferta", value: "Venda (Usada)" },
    { label: "Localização", value: "Campinas - SP" },
  ],
  technicalInfo: [
    { label: "Potência do Motor", value: "47 CV (34,5 kW)" },
    { label: "Número de Cilindros", value: "3 cilindros" },
    { label: "Cilindrada", value: "1.642 cm³" },
    { label: "Tração", value: "4x4" },
    { label: "Transmissão", value: "Hidrostática (HST)" },
    { label: "Capacidade do Tanque", value: "43 litros" },
    { label: "PTO", value: "540 / 1.000 rpm" },
    { label: "Levante hidráulico", value: "1.200 kg" },
    { label: "Peso", value: "1.700 kg" },
    { label: "Pneus dianteiros", value: "9.5-16" },
    { label: "Pneus traseiros", value: "16.9-28" },
  ],
};

const relatedMachines = [
  { id: 3, name: "Trator YANMAR YT359", year: 2023, price: "R$ 185.000", condition: "Demonstração", image: "https://images.unsplash.com/photo-1564868480822-32f714a0e763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80", conditionColor: "#0066CC" },
  { id: 7, name: "Trator YANMAR YT235", year: 2019, price: "R$ 72.000", condition: "Usada", image: "https://images.unsplash.com/photo-1568680870491-590cd4e224ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80", conditionColor: "#2D7A2D" },
  { id: 8, name: "Motor Diesel YANMAR 4TNV98", year: 2022, price: "R$ 45.000", condition: "Demonstração", image: "https://images.unsplash.com/photo-1614447428943-52ec0bdbc7aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&q=80", conditionColor: "#0066CC" },
];

export function DetalhesMaquina() {
  const { id } = useParams();
  const [machine, setMachine] = useState<any>(fallbackMachineData);
  const [related, setRelated] = useState<any[]>(relatedMachines);
  const [currentImg, setCurrentImg] = useState(0);
  const [saved, setSaved] = useState(false);
  const [formData, setFormData] = useState({ nome: "", telefone: "", email: "", mensagem: "Olá, tenho interesse neste equipamento. Poderia me fornecer mais informações?" });
  const [leadStatus, setLeadStatus] = useState("");

  useEffect(() => {
    if (!id) return;
    listingsApi.getById(id).then((data) => {
      const images = data.photos?.length ? data.photos.map((photo: any) => photo.url) : [data.cover_url || fallbackMachineImage];
      const specs = Object.entries(data.specs || {}).map(([label, value]) => ({
        label: label.replaceAll("_", " "),
        value: String(value),
      }));
      setMachine({
        id: data.id,
        name: data.title,
        year: data.year,
        hours: `${Number(data.hours_used || 0).toLocaleString("pt-BR")} h`,
        condition: "Usada",
        conditionColor: "#2D7A2D",
        price: formatPrice(data.price),
        location: [data.city, data.state].filter(Boolean).join(" - ") || "Brasil",
        dealer: data.dealer_name,
        dealerPhone: data.dealer_phone || "0800 722 7777",
        dealerEmail: data.dealer_email || "contato@yanmar.com.br",
        dealerRating: 4.9,
        dealerReviews: 127,
        rating: 4.9,
        category: data.category,
        model: data.model,
        images,
        mainInfo: [
          { label: "Modelo", value: data.model || "YANMAR" },
          { label: "Ano", value: String(data.year || "—") },
          { label: "Horas de uso", value: `${Number(data.hours_used || 0).toLocaleString("pt-BR")} horas` },
          { label: "Estado de conservação", value: "Muito bom" },
          { label: "Tipo de oferta", value: "Venda (Usada)" },
          { label: "Localização", value: [data.city, data.state].filter(Boolean).join(" - ") || "Brasil" },
        ],
        technicalInfo: specs.length ? specs : [{ label: "Informações", value: "Consulte a concessionária" }],
      });
      if (data.related?.length) {
        setRelated(data.related.map((item: any) => ({
          id: item.id,
          name: item.title,
          year: item.year,
          price: formatPrice(item.price),
          condition: "Usada",
          image: item.cover_url || fallbackMachineImage,
          conditionColor: "#2D7A2D",
        })));
      }
      setCurrentImg(0);
    }).catch(() => undefined);
  }, [id]);

  async function sendLead() {
    if (!id || !formData.nome || !formData.email) {
      setLeadStatus("Preencha seu nome e e-mail.");
      return;
    }
    try {
      await listingsApi.sendLead(id, { name: formData.nome, email: formData.email, phone: formData.telefone, message: formData.mensagem });
      setLeadStatus("Interesse enviado com sucesso. A concessionária entrará em contato.");
    } catch (error) {
      setLeadStatus(error instanceof Error ? error.message : "Não foi possível enviar o interesse.");
    }
  }

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
                {/* Condition + actions */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-white px-2.5 py-1 rounded-sm" style={{ backgroundColor: machine.conditionColor, fontSize: "0.72rem", fontWeight: 700 }}>
                    {machine.condition}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-2">
                  <button onClick={() => setSaved(!saved)} className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
                    <Heart size={16} fill={saved ? "#CC0000" : "none"} color={saved ? "#CC0000" : "#888"} />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center">
                    <Share2 size={16} className="text-gray-500" />
                  </button>
                </div>
                {/* Arrows */}
                <button onClick={() => setCurrentImg((i) => (i === 0 ? machine.images.length - 1 : i - 1))} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={() => setCurrentImg((i) => (i === machine.images.length - 1 ? 0 : i + 1))} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center">
                  <ChevronRight size={18} />
                </button>
                {/* Counter */}
                <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-0.5 rounded text-xs">
                  {currentImg + 1}/{machine.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 p-3">
                {machine.images.map((img, i) => (
                  <button key={i} onClick={() => setCurrentImg(i)} className="flex-1 overflow-hidden rounded" style={{ height: "64px", outline: i === currentImg ? "2px solid #CC0000" : "none", opacity: i === currentImg ? 1 : 0.6 }}>
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
                  <span className="text-white" style={{ fontSize: "0.7rem", fontWeight: 800, textAlign: "center", lineHeight: 1.2 }}>YANMAR<br/>AUTH</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 mb-0.5" style={{ fontSize: "1rem", fontWeight: 700 }}>{machine.dealer}</p>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Star size={13} fill="#F5A623" color="#F5A623" />
                    <span className="text-gray-600" style={{ fontSize: "0.8rem", fontWeight: 600 }}>{machine.dealerRating}</span>
                    <span className="text-gray-400" style={{ fontSize: "0.8rem" }}>({machine.dealerReviews} avaliações)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 mb-1" style={{ fontSize: "0.8rem" }}>
                    <MapPin size={13} style={{ color: "#CC0000" }} /> {machine.location}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <a href={`tel:${machine.dealerPhone}`} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-sm hover:border-red-300 hover:text-red-600 transition-colors text-gray-600" style={{ fontSize: "0.78rem", fontWeight: 500 }}>
                      <Phone size={13} /> {machine.dealerPhone}
                    </a>
                    <a href={`mailto:${machine.dealerEmail}`} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-sm hover:border-red-300 hover:text-red-600 transition-colors text-gray-600" style={{ fontSize: "0.78rem", fontWeight: 500 }}>
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
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h1 className="text-gray-900 mb-0.5" style={{ fontSize: "1.05rem", fontWeight: 800, lineHeight: 1.2 }}>{machine.name}</h1>
                  <p className="text-gray-400" style={{ fontSize: "0.78rem" }}>{machine.year} · {machine.hours}</p>
                </div>
                <div className="flex items-center gap-0.5">
                  <Star size={13} fill="#F5A623" color="#F5A623" />
                  <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>{machine.rating}</span>
                </div>
              </div>
              <p className="mb-4" style={{ fontSize: "1.8rem", fontWeight: 900, color: "#CC0000", lineHeight: 1 }}>{machine.price}</p>
              <div className="flex items-center gap-1.5 text-gray-500 mb-4" style={{ fontSize: "0.8rem" }}>
                <MapPin size={13} /> {machine.location}
              </div>
              <div className="space-y-2">
                {[
                  { icon: CheckCircle2, label: "Procedência verificada" },
                  { icon: ShieldCheck, label: "Laudo técnico disponível" },
                  { icon: Clock, label: "Resposta em até 2 horas" },
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
                  type="button"
                  onClick={sendLead}
                  className="w-full text-white py-3 rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#CC0000", fontSize: "0.875rem", fontWeight: 700 }}
                >
                  <MessageSquare size={15} /> Enviar mensagem
                </button>
                {leadStatus && <p className="text-sm text-gray-600 bg-gray-50 border border-gray-100 rounded p-3">{leadStatus}</p>}
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
            {related.map((m) => (
              <Link key={m.id} to={`/maquinas/${m.id}`} className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md hover:border-red-100 transition-all group">
                <div className="relative overflow-hidden" style={{ height: "150px" }}>
                  <img src={m.image} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-2.5 right-2.5 text-white px-2 py-0.5 rounded-sm" style={{ backgroundColor: m.conditionColor, fontSize: "0.65rem", fontWeight: 700 }}>{m.condition}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-gray-800 mb-1" style={{ fontSize: "0.85rem", fontWeight: 700 }}>{m.name}</h3>
                  <div className="flex items-center justify-between">
                    <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "#CC0000" }}>{m.price}</span>
                    <span className="text-gray-400" style={{ fontSize: "0.72rem" }}>{m.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
