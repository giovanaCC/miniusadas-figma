import { Phone, Mail, Instagram, Linkedin, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router";
import yanmarLogo from "../../imports/Logo_Yanmar_Horizontal_1.png";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1C1C1C" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={yanmarLogo} alt="YANMAR" style={{ height: "22px", width: "auto", filter: "brightness(0) invert(1)" }} />
              <div className="flex items-center pl-3" style={{ borderLeft: "1px solid rgba(255,255,255,0.2)" }}>
                <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#fff" }}>Mini</span>
                <span style={{ fontSize: "0.88rem", fontWeight: 400, color: "#CC0000" }}>usadas</span>
              </div>
            </Link>
            <p className="text-white/50 mb-4" style={{ fontSize: "0.8rem", lineHeight: 1.7 }}>
              O marketplace oficial de máquinas YANMAR usadas, em demonstração e locação.
            </p>
            <div className="space-y-2">
              <a href="tel:08007227777" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors" style={{ fontSize: "0.78rem" }}>
                <Phone size={12} style={{ color: "#CC0000" }} /> 0800 722 7777
              </a>
              <a href="mailto:miniusadas@yanmar.com.br" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors" style={{ fontSize: "0.78rem" }}>
                <Mail size={12} style={{ color: "#CC0000" }} /> miniusadas@yanmar.com.br
              </a>
            </div>
            <div className="flex items-center gap-2 mt-4">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-7 h-7 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#CC0000")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)")}
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-white mb-3" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Plataforma</p>
            <ul className="space-y-2">
              {[["Máquinas disponíveis", "/maquinas"], ["Tratores", "/maquinas"], ["Miniescavadeiras", "/maquinas"], ["Motores", "/maquinas"], ["Grupos Geradores", "/maquinas"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="text-white/50 hover:text-white transition-colors" style={{ fontSize: "0.8rem" }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white mb-3" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Institucional</p>
            <ul className="space-y-2">
              {[["Sobre a Miniusadas", "/sobre"], ["Quero Anunciar", "/anunciar"], ["Contato", "/contato"], ["Portal do Revendedor", "#"], ["YANMAR Brasil", "#"]].map(([label, href]) => (
                <li key={label}><Link to={href} className="text-white/50 hover:text-white transition-colors" style={{ fontSize: "0.8rem" }}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white mb-3" style={{ fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase" }}>Segmentos</p>
            <ul className="space-y-2">
              {["Agronegócio", "Construção Civil", "Energia", "Náutico"].map((label) => (
                <li key={label}><Link to="/maquinas" className="text-white/50 hover:text-white transition-colors" style={{ fontSize: "0.8rem" }}>{label}</Link></li>
              ))}
            </ul>
            <div className="mt-5 p-4 rounded-lg" style={{ backgroundColor: "rgba(204,0,0,0.15)", border: "1px solid rgba(204,0,0,0.3)" }}>
              <p className="text-white/80 mb-2" style={{ fontSize: "0.75rem", fontWeight: 600 }}>É concessionária YANMAR?</p>
              <Link to="/anunciar" className="text-white px-3 py-1.5 rounded-sm block text-center hover:opacity-90 transition-opacity" style={{ backgroundColor: "#CC0000", fontSize: "0.75rem", fontWeight: 700 }}>
                Anuncie suas máquinas
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30" style={{ fontSize: "0.72rem" }}>© 2026 YANMAR Miniusadas. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            {["Privacidade", "Termos de Uso", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 transition-colors" style={{ fontSize: "0.72rem" }}>{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
