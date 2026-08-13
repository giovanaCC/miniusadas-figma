import { Link } from "react-router";
import { CheckCircle2, ShieldCheck, Users, BarChart3, ArrowRight, Star, Tractor } from "lucide-react";

export function SobreMiniusadas() {
  return (
    <div style={{ backgroundColor: "#F7F7F7", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        className="relative py-16"
        style={{ background: "linear-gradient(135deg, #1C1C1C 0%, #2D1A1A 100%)" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-white px-3 py-1 rounded-full mb-5" style={{ backgroundColor: "#CC0000", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Sobre a plataforma
          </span>
          <h1 className="text-white mb-4" style={{ fontSize: "2.2rem", fontWeight: 800, lineHeight: 1.2 }}>
            O que é a YANMAR Miniusadas?
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            A YANMAR Miniusadas é o marketplace oficial da YANMAR para compra, venda e locação de máquinas e equipamentos usados. Uma plataforma segura que conecta compradores a concessionárias autorizadas em todo o Brasil.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-14">
        {/* Como funciona */}
        <section>
          <div className="text-center mb-8">
            <p style={{ color: "#CC0000", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }} className="mb-1">Passo a passo</p>
            <h2 className="text-gray-900" style={{ fontSize: "1.6rem", fontWeight: 700 }}>Como funciona</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { n: "01", title: "Busque", desc: "Use os filtros para encontrar a máquina certa por categoria, ano, estado e faixa de preço." },
              { n: "02", title: "Analise", desc: "Veja fotos, especificações técnicas, laudo e informações da concessionária." },
              { n: "03", title: "Contate", desc: "Envie uma mensagem ou ligue diretamente para a concessionária autorizada." },
              { n: "04", title: "Negocie", desc: "Conclua o negócio com segurança e transparência, com suporte da YANMAR." },
            ].map((s) => (
              <div key={s.n} className="bg-white rounded-xl p-5 border border-gray-100 text-center shadow-sm">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: "#CC0000" }}>
                  <span className="text-white" style={{ fontWeight: 800 }}>{s.n}</span>
                </div>
                <h3 className="text-gray-900 mb-2" style={{ fontSize: "0.95rem", fontWeight: 700 }}>{s.title}</h3>
                <p className="text-gray-500" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefícios compradores */}
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FFF0F0" }}>
              <Users size={20} style={{ color: "#CC0000" }} />
            </div>
            <h2 className="text-gray-900" style={{ fontSize: "1.3rem", fontWeight: 700 }}>Benefícios para compradores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Acesso a máquinas verificadas por concessionárias autorizadas YANMAR",
              "Laudos técnicos e histórico de manutenção disponíveis",
              "Fotos reais do equipamento antes da compra",
              "Filtros avançados para encontrar exatamente o que precisa",
              "Suporte YANMAR durante todo o processo de negociação",
              "Garantia de procedência e autenticidade dos equipamentos",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} style={{ color: "#CC0000", flexShrink: 0, marginTop: "2px" }} />
                <p className="text-gray-600" style={{ fontSize: "0.85rem", lineHeight: 1.55 }}>{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefícios concessionárias */}
        <section className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FFF0F0" }}>
              <BarChart3 size={20} style={{ color: "#CC0000" }} />
            </div>
            <h2 className="text-gray-900" style={{ fontSize: "1.3rem", fontWeight: 700 }}>Benefícios para concessionárias</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Alcance nacional: expanda suas vendas para todo o Brasil",
              "Plataforma exclusiva YANMAR com tráfego qualificado",
              "Gestão simples de anúncios pelo portal do revendedor",
              "Dashboard com métricas de visualizações e contatos",
              "Integração com o portfólio de máquinas usadas do estoque",
              "Suporte dedicado da equipe YANMAR para publicação",
            ].map((b) => (
              <div key={b} className="flex items-start gap-2.5">
                <CheckCircle2 size={16} style={{ color: "#CC0000", flexShrink: 0, marginTop: "2px" }} />
                <p className="text-gray-600" style={{ fontSize: "0.85rem", lineHeight: 1.55 }}>{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Segurança */}
        <section>
          <div className="text-center mb-6">
            <h2 className="text-gray-900" style={{ fontSize: "1.3rem", fontWeight: 700 }}>Segurança, transparência e procedência</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, title: "Concessionárias autorizadas", desc: "Somente revendedores YANMAR certificados podem anunciar na plataforma." },
              { icon: CheckCircle2, title: "Laudos técnicos", desc: "Cada anúncio conta com relatório de vistoria e estado de conservação." },
              { icon: Star, title: "Avaliações verificadas", desc: "Sistema de avaliação de concessionárias para orientar sua escolha." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#FFF0F0" }}>
                  <Icon size={22} style={{ color: "#CC0000" }} />
                </div>
                <h3 className="text-gray-900 mb-2" style={{ fontSize: "0.95rem", fontWeight: 700 }}>{title}</h3>
                <p className="text-gray-500" style={{ fontSize: "0.82rem", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTAs */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link
            to="/maquinas"
            className="flex items-center justify-between bg-white border border-gray-100 rounded-xl p-6 hover:border-red-200 hover:shadow-md transition-all group"
          >
            <div>
              <p className="text-gray-900 mb-1" style={{ fontSize: "1rem", fontWeight: 700 }}>Visualizar máquinas disponíveis</p>
              <p className="text-gray-500" style={{ fontSize: "0.82rem" }}>2.400+ equipamentos em todo o Brasil</p>
            </div>
            <ArrowRight size={20} className="text-red-600 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/anunciar"
            className="flex items-center justify-between rounded-xl p-6 hover:opacity-90 transition-opacity group"
            style={{ backgroundColor: "#CC0000" }}
          >
            <div>
              <p className="text-white mb-1" style={{ fontSize: "1rem", fontWeight: 700 }}>Quero anunciar minha máquina</p>
              <p className="text-white/70" style={{ fontSize: "0.82rem" }}>Cadastre sua concessionária agora</p>
            </div>
            <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </div>
    </div>
  );
}
