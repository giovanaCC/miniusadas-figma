import { ShieldCheck, Wrench, Globe2, Leaf, Award, HeadphonesIcon } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "130+ Anos de Experiência",
    description: "Desde 1912, a YANMAR inova em tecnologia de motores e máquinas, sendo referência global em soluções de potência.",
  },
  {
    icon: ShieldCheck,
    title: "Qualidade Certificada",
    description: "Todos os equipamentos YANMAR passam por rigorosos testes de qualidade e possuem certificações internacionais.",
  },
  {
    icon: Wrench,
    title: "Rede de Suporte",
    description: "Mais de 1.200 pontos de atendimento no Brasil com técnicos certificados e peças originais sempre disponíveis.",
  },
  {
    icon: Globe2,
    title: "Presença Global",
    description: "Atuamos em mais de 50 países, levando tecnologia japonesa e confiabilidade para agricultores e profissionais do mundo todo.",
  },
  {
    icon: Leaf,
    title: "Compromisso Ambiental",
    description: "Motores com tecnologia de baixa emissão e soluções sustentáveis para um agronegócio mais eficiente e responsável.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte 24/7",
    description: "Assistência técnica especializada disponível todos os dias, para garantir máxima disponibilidade do seu equipamento.",
  },
];

export function WhyYanmar() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="mb-2" style={{ color: "#CC0000", fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Por que escolher a YANMAR
          </p>
          <h2 className="text-gray-900 mb-4" style={{ fontSize: "2rem", fontWeight: 700, lineHeight: 1.2 }}>
            Tecnologia e confiabilidade que<br />fazem a diferença
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontSize: "0.95rem", lineHeight: 1.65 }}>
            A YANMAR é a escolha de profissionais que não abrem mão de desempenho, durabilidade e suporte técnico especializado.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-xl border border-gray-100 hover:border-red-100 hover:shadow-md transition-all cursor-default"
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 transition-colors"
                  style={{ backgroundColor: "#FFF0F0" }}
                >
                  <Icon size={22} style={{ color: "#CC0000" }} />
                </div>
                <h3 className="text-gray-900 mb-2" style={{ fontSize: "1rem", fontWeight: 700 }}>{pillar.title}</h3>
                <p className="text-gray-500" style={{ fontSize: "0.875rem", lineHeight: 1.65 }}>{pillar.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div
          className="mt-12 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: "linear-gradient(135deg, #1C1C1C 0%, #2D2D2D 100%)" }}
        >
          <div>
            <h3 className="text-white mb-2" style={{ fontSize: "1.4rem", fontWeight: 700 }}>
              Pronto para aumentar sua produtividade?
            </h3>
            <p className="text-white/70" style={{ fontSize: "0.9rem" }}>
              Fale com um de nossos consultores e encontre o equipamento ideal para o seu negócio.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              style={{ backgroundColor: "#CC0000", fontSize: "0.9rem", fontWeight: 600 }}
              className="text-white px-6 py-3 rounded-sm hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Falar com Consultor
            </button>
            <button
              className="text-white border border-white/30 px-6 py-3 rounded-sm hover:bg-white/10 transition-colors whitespace-nowrap"
              style={{ fontSize: "0.9rem", fontWeight: 500 }}
            >
              Ver Catálogo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
