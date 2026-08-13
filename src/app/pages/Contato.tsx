import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, ChevronDown } from "lucide-react";

const channels = [
  { icon: Phone, title: "Telefone / SAC", info: "0800 722 7777", sub: "Segunda a Sexta, 8h às 18h", href: "tel:08007227777" },
  { icon: Mail, title: "E-mail", info: "miniusadas@yanmar.com.br", sub: "Resposta em até 1 dia útil", href: "mailto:miniusadas@yanmar.com.br" },
  { icon: MessageSquare, title: "WhatsApp", info: "(11) 99999-8888", sub: "Segunda a Sábado, 8h às 20h", href: "#" },
  { icon: Clock, title: "Horário de atendimento", info: "Seg–Sex: 8h às 18h", sub: "Sáb: 8h às 13h", href: null },
];

const faqs = [
  { q: "Como posso anunciar minha máquina na plataforma?", a: "A plataforma é exclusiva para concessionárias YANMAR autorizadas. Se você já é revendedor, acesse o Portal do Revendedor com suas credenciais." },
  { q: "As máquinas anunciadas passam por inspeção?", a: "Sim. Todos os anúncios precisam incluir laudo técnico ou relatório de revisão. Nossa equipe verifica as informações antes da publicação." },
  { q: "Posso solicitar uma visita para ver a máquina pessoalmente?", a: "Sim. Após o contato com a concessionária, você pode agendar uma visita para ver o equipamento presencialmente." },
  { q: "A YANMAR Miniusadas oferece financiamento?", a: "A plataforma conecta compradores às concessionárias, que oferecem diferentes opções de financiamento e consórcio. Consulte diretamente o revendedor de interesse." },
];

export function Contato() {
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: "#F7F7F7", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ backgroundColor: "#1C1C1C" }} className="py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-white mb-3" style={{ fontSize: "2rem", fontWeight: 800 }}>Fale conosco</h1>
          <p className="text-white/65" style={{ fontSize: "0.95rem", lineHeight: 1.6 }}>
            Nossa equipe está pronta para ajudar. Escolha o canal de atendimento mais conveniente para você.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Canais de atendimento */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {channels.map(({ icon: Icon, title, info, sub, href }) => (
            <div key={title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#FFF0F0" }}>
                <Icon size={20} style={{ color: "#CC0000" }} />
              </div>
              <p className="text-gray-500 mb-0.5" style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>{title}</p>
              {href ? (
                <a href={href} className="text-gray-900 hover:text-red-600 transition-colors block mb-1" style={{ fontSize: "0.9rem", fontWeight: 700 }}>{info}</a>
              ) : (
                <p className="text-gray-900 mb-1" style={{ fontSize: "0.9rem", fontWeight: 700 }}>{info}</p>
              )}
              <p className="text-gray-400" style={{ fontSize: "0.75rem" }}>{sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Formulário */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <h2 className="text-gray-900 mb-5" style={{ fontSize: "1.2rem", fontWeight: 700 }}>Envie uma mensagem</h2>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#E6F9F0" }}>
                    <Send size={28} style={{ color: "#1D9A60" }} />
                  </div>
                  <p className="text-gray-900 mb-2" style={{ fontSize: "1.1rem", fontWeight: 700 }}>Mensagem enviada!</p>
                  <p className="text-gray-500" style={{ fontSize: "0.875rem" }}>Retornaremos em até 1 dia útil.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-600 mb-1.5" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Nome completo *</label>
                      <input
                        required
                        type="text"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full border border-gray-200 rounded px-3 py-2.5 outline-none focus:border-red-400 transition-colors"
                        style={{ fontSize: "0.85rem" }}
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-600 mb-1.5" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Telefone</label>
                      <input
                        type="tel"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full border border-gray-200 rounded px-3 py-2.5 outline-none focus:border-red-400 transition-colors"
                        style={{ fontSize: "0.85rem" }}
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-600 mb-1.5" style={{ fontSize: "0.8rem", fontWeight: 600 }}>E-mail *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 outline-none focus:border-red-400 transition-colors"
                      style={{ fontSize: "0.85rem" }}
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 mb-1.5" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Assunto *</label>
                    <select
                      required
                      value={formData.assunto}
                      onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 outline-none focus:border-red-400 transition-colors text-gray-700"
                      style={{ fontSize: "0.85rem" }}
                    >
                      <option value="">Selecione o assunto</option>
                      <option>Dúvida sobre compra</option>
                      <option>Quero anunciar uma máquina</option>
                      <option>Suporte técnico da plataforma</option>
                      <option>Reclamação ou sugestão</option>
                      <option>Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-600 mb-1.5" style={{ fontSize: "0.8rem", fontWeight: 600 }}>Mensagem *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full border border-gray-200 rounded px-3 py-2.5 outline-none focus:border-red-400 transition-colors resize-none"
                      style={{ fontSize: "0.85rem" }}
                      placeholder="Descreva sua dúvida ou necessidade..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 text-white py-3 rounded-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#CC0000", fontSize: "0.9rem", fontWeight: 700 }}
                  >
                    <Send size={15} /> Enviar mensagem
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* FAQ + Institutional */}
          <div className="lg:col-span-2 space-y-5">
            {/* FAQ */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-gray-900 mb-4" style={{ fontSize: "1rem", fontWeight: 700 }}>Perguntas frequentes</h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-100 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-gray-700 pr-4" style={{ fontSize: "0.82rem", fontWeight: 600 }}>{faq.q}</span>
                      <ChevronDown size={15} className={`flex-shrink-0 text-gray-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-500" style={{ fontSize: "0.8rem", lineHeight: 1.65 }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Informações institucionais */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h2 className="text-gray-900 mb-4" style={{ fontSize: "1rem", fontWeight: 700 }}>Informações institucionais</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={15} style={{ color: "#CC0000", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <p className="text-gray-700" style={{ fontSize: "0.82rem", fontWeight: 600 }}>YANMAR Brasil</p>
                    <p className="text-gray-400" style={{ fontSize: "0.78rem" }}>Av. das Nações Unidas, 14261<br />São Paulo - SP, CEP 04794-000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={15} style={{ color: "#CC0000", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <p className="text-gray-700" style={{ fontSize: "0.82rem", fontWeight: 600 }}>Central de atendimento</p>
                    <p className="text-gray-400" style={{ fontSize: "0.78rem" }}>0800 722 7777 (gratuito)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={15} style={{ color: "#CC0000", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <p className="text-gray-700" style={{ fontSize: "0.82rem", fontWeight: 600 }}>E-mail institucional</p>
                    <a href="mailto:miniusadas@yanmar.com.br" className="text-gray-400 hover:text-red-600 transition-colors" style={{ fontSize: "0.78rem" }}>miniusadas@yanmar.com.br</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
