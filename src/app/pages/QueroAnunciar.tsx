import { Link } from "react-router";
import { CheckCircle2, Users, BarChart3, Shield, Clock, ArrowRight, ChevronRight } from "lucide-react";

const steps = [
  { n: "01", title: "Acesse o portal", desc: "Entre no Portal do Revendedor YANMAR com suas credenciais de concessionária autorizada." },
  { n: "02", title: "Cadastre o equipamento", desc: "Preencha as informações técnicas, condição de conservação e adicione as fotos do equipamento." },
  { n: "03", title: "Aguarde a aprovação", desc: "Nossa equipe revisa o anúncio em até 24 horas úteis para garantir qualidade e conformidade." },
  { n: "04", title: "Receba contatos", desc: "Compradores interessados entram em contato diretamente com sua concessionária." },
];

const rules = [
  "Somente concessionárias YANMAR autorizadas e ativas podem anunciar",
  "Máquinas devem ser YANMAR ou de marcas homologadas pela rede",
  "Mínimo de 8 fotos de qualidade por anúncio (exterior, interior, motor, painel)",
  "Informações técnicas precisam ser verídicas e completas",
  "Laudo de revisão ou relatório de horas obrigatório",
  "Preço de venda ou valor mensal de locação deve ser informado",
  "Anúncios com informações incorretas serão reprovados ou removidos",
];

const benefits = [
  { icon: BarChart3, title: "Alcance nacional", desc: "Seus equipamentos ficam visíveis para compradores de todo o Brasil." },
  { icon: Users, title: "Leads qualificados", desc: "Contatos de compradores que já buscaram ativamente pelo seu tipo de equipamento." },
  { icon: Shield, title: "Marca YANMAR", desc: "Toda a credibilidade e confiança da marca YANMAR associada ao seu anúncio." },
  { icon: Clock, title: "Publicação ágil", desc: "Anúncio aprovado e no ar em até 24 horas úteis após o envio." },
];

export function QueroAnunciar() {
  return (
    <div style={{ backgroundColor: "#F7F7F7", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        className="relative py-14 overflow-hidden"
        style={{ backgroundColor: "#CC0000" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full mb-4" style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Para concessionárias autorizadas
          </span>
          <h1 className="text-white mb-4" style={{ fontSize: "2.2rem", fontWeight: 800, lineHeight: 1.2 }}>
            Anuncie suas máquinas<br />para todo o Brasil
          </h1>
          <p className="text-white/80 max-w-xl mx-auto mb-8" style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
            Alcance milhares de compradores qualificados na plataforma oficial de usados da YANMAR. Processo simples, aprovação rápida.
          </p>
          <a
            href="#cadastro"
            className="inline-flex items-center gap-2 bg-white px-7 py-3.5 rounded-sm hover:bg-gray-100 transition-colors"
            style={{ color: "#CC0000", fontSize: "0.9rem", fontWeight: 700 }}
          >
            Acessar cadastro <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Apresentação da área */}
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p style={{ color: "#CC0000", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-2">Por que anunciar</p>
              <h2 className="text-gray-900 mb-4" style={{ fontSize: "1.4rem", fontWeight: 700, lineHeight: 1.3 }}>
                Transforme seu estoque em vendas
              </h2>
              <p className="text-gray-500 mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>
                A YANMAR Miniusadas é o único canal oficial para divulgação de máquinas YANMAR usadas no Brasil. Com mais de 50.000 visitantes mensais, sua concessionária terá visibilidade nacional sem esforço adicional de marketing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50k+", label: "Visitantes/mês" },
                { value: "2.400+", label: "Anúncios ativos" },
                { value: "340+", label: "Concessionárias" },
                { value: "24h", label: "Aprovação" },
              ].map((s) => (
                <div key={s.label} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#CC0000" }}>{s.value}</div>
                  <div className="text-gray-500" style={{ fontSize: "0.75rem" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quem pode anunciar */}
        <section>
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "1.3rem", fontWeight: 700 }}>Quem pode anunciar?</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
            <p className="text-gray-600 mb-4" style={{ fontSize: "0.9rem", lineHeight: 1.65 }}>
              A plataforma é exclusiva para <strong>concessionárias YANMAR autorizadas e ativas</strong>. Se você já é revendedor YANMAR, basta acessar o Portal do Revendedor com suas credenciais.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Concessionárias autorizadas YANMAR", "Revendedores de máquinas agrícolas", "Revendedores de equipamentos de construção", "Revendedores de equipamentos náuticos"].map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ backgroundColor: "#FFF0F0", color: "#CC0000", fontSize: "0.78rem", fontWeight: 600 }}>
                  <CheckCircle2 size={13} /> {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 p-4 rounded-lg" style={{ backgroundColor: "#FFFBF0", borderLeft: "3px solid #F5A623" }}>
              <p className="text-gray-600" style={{ fontSize: "0.82rem" }}>
                <strong>Ainda não é revendedor YANMAR?</strong> Acesse o site oficial da YANMAR Brasil para informações sobre como se tornar um concessionário autorizado.
              </p>
            </div>
          </div>
        </section>

        {/* Como funciona o processo */}
        <section>
          <h2 className="text-gray-900 mb-5" style={{ fontSize: "1.3rem", fontWeight: 700 }}>Como funciona o processo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={step.n} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm relative">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: "#CC0000" }}>
                  <span className="text-white" style={{ fontSize: "0.85rem", fontWeight: 800 }}>{step.n}</span>
                </div>
                {i < steps.length - 1 && (
                  <ChevronRight size={16} className="absolute top-7 right-3 text-red-200 hidden lg:block" />
                )}
                <h3 className="text-gray-900 mb-1.5" style={{ fontSize: "0.9rem", fontWeight: 700 }}>{step.title}</h3>
                <p className="text-gray-500" style={{ fontSize: "0.8rem", lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Regras de publicação */}
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h2 className="text-gray-900 mb-5" style={{ fontSize: "1.3rem", fontWeight: 700 }}>Regras de publicação</h2>
          <div className="space-y-3">
            {rules.map((rule, i) => (
              <div key={i} className="flex items-start gap-3 py-2.5 border-b border-gray-50 last:border-0">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "#FFF0F0" }}>
                  <span style={{ color: "#CC0000", fontSize: "0.65rem", fontWeight: 800 }}>{i + 1}</span>
                </div>
                <p className="text-gray-600" style={{ fontSize: "0.85rem", lineHeight: 1.5 }}>{rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fluxo de aprovação */}
        <section>
          <h2 className="text-gray-900 mb-5" style={{ fontSize: "1.3rem", fontWeight: 700 }}>Fluxo de aprovação</h2>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {[
              { status: "Enviado", desc: "Concessionária submete o anúncio pelo portal", color: "#0066CC" },
              { status: "Em revisão", desc: "Equipe YANMAR verifica informações e fotos (até 24h úteis)", color: "#F5A623" },
              { status: "Ajustes (se necessário)", desc: "Concessionária recebe feedback e faz correções", color: "#8B4A00" },
              { status: "Aprovado e publicado", desc: "Anúncio vai ao ar e fica visível para compradores", color: "#2D7A2D" },
            ].map((step, i) => (
              <div key={step.status} className="flex items-start gap-4 p-5 border-b border-gray-50 last:border-0">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: step.color }}>
                    <span className="text-white" style={{ fontSize: "0.75rem", fontWeight: 700 }}>{i + 1}</span>
                  </div>
                  {i < 3 && <div className="w-0.5 h-4" style={{ backgroundColor: "#E5E5E5" }} />}
                </div>
                <div className="pt-1">
                  <span className="text-white px-2 py-0.5 rounded-sm mr-2" style={{ backgroundColor: step.color, fontSize: "0.72rem", fontWeight: 700 }}>{step.status}</span>
                  <span className="text-gray-500" style={{ fontSize: "0.82rem" }}>{step.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefícios */}
        <section>
          <h2 className="text-gray-900 mb-5" style={{ fontSize: "1.3rem", fontWeight: 700 }}>Benefícios para concessionárias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ backgroundColor: "#FFF0F0" }}>
                  <Icon size={18} style={{ color: "#CC0000" }} />
                </div>
                <h3 className="text-gray-900 mb-1" style={{ fontSize: "0.9rem", fontWeight: 700 }}>{title}</h3>
                <p className="text-gray-500" style={{ fontSize: "0.8rem", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA acessar cadastro */}
        <section id="cadastro" className="rounded-2xl p-10 text-center" style={{ backgroundColor: "#1C1C1C" }}>
          <h2 className="text-white mb-3" style={{ fontSize: "1.5rem", fontWeight: 700 }}>Pronto para começar?</h2>
          <p className="text-white/65 mb-7 max-w-md mx-auto" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
            Acesse o Portal do Revendedor YANMAR com suas credenciais e publique seu primeiro anúncio hoje mesmo.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#CC0000", fontSize: "0.9rem", fontWeight: 700 }}
            >
              Acessar Portal do Revendedor <ArrowRight size={15} />
            </a>
            <Link
              to="/contato"
              className="text-white/70 hover:text-white transition-colors"
              style={{ fontSize: "0.85rem" }}
            >
              Dúvidas? Fale conosco
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
