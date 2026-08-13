import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Link, useLocation } from "react-router";
import yanmarLogo from "../../imports/Logo_Yanmar_Horizontal_1.png";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Máquinas", href: "/maquinas" },
  { label: "Sobre a Miniusadas", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Top utility bar */}
      <div style={{ backgroundColor: "#1C1C1C" }} className="py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-white/60" style={{ fontSize: "0.72rem" }}>
            Marketplace oficial de máquinas de construção YANMAR
          </span>
          <div className="flex items-center gap-4">
            <Link
              to="/entrar"
              className="text-white/60 hover:text-white transition-colors"
              style={{ fontSize: "0.72rem" }}
            >
              Portal do Revendedor
            </Link>
            <span className="text-white/20">|</span>
            <a href="tel:08007227777" className="text-white/60 hover:text-white transition-colors" style={{ fontSize: "0.72rem" }}>
              0800 722 7777
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src={yanmarLogo} alt="YANMAR" style={{ height: "28px", width: "auto" }} />
            <div className="flex items-center pl-3" style={{ borderLeft: "1px solid #E0E0E0" }}>
              <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1C1C1C", letterSpacing: "-0.01em" }}>Mini</span>
              <span style={{ fontSize: "0.95rem", fontWeight: 400, color: "#CC0000" }}>usadas</span>
            </div>
          </Link>

          {/* Search bar (desktop) */}
          <div className="hidden lg:flex flex-1 max-w-md items-center gap-2 bg-gray-50 border border-gray-200 rounded-sm px-3 py-2 focus-within:border-red-400 transition-colors">
            <Search size={15} className="text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por modelo, categoria..."
              className="flex-1 bg-transparent outline-none text-gray-700"
              style={{ fontSize: "0.85rem" }}
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? location.pathname === "/" : location.pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="transition-colors py-1 border-b-2"
                  style={{
                    fontSize: "0.83rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#CC0000" : "#444",
                    borderColor: isActive ? "#CC0000" : "transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA: ver máquinas */}
          <Link
            to="/maquinas"
            className="hidden lg:inline-flex items-center text-white px-4 py-2 rounded-sm hover:opacity-90 transition-opacity flex-shrink-0"
            style={{ backgroundColor: "#CC0000", fontSize: "0.82rem", fontWeight: 700 }}
          >
            Ver máquinas
          </Link>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-3">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-sm px-3 py-2 mb-3">
            <Search size={15} className="text-gray-400" />
            <input type="text" placeholder="Buscar máquinas..." className="flex-1 bg-transparent outline-none" style={{ fontSize: "0.85rem" }} />
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block py-2.5 border-b border-gray-50 text-gray-700"
              style={{ fontSize: "0.9rem" }}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/maquinas"
            className="mt-3 block text-center text-white py-3 rounded-sm"
            style={{ backgroundColor: "#CC0000", fontSize: "0.9rem", fontWeight: 700 }}
            onClick={() => setMobileOpen(false)}
          >
            Ver máquinas disponíveis
          </Link>
        </div>
      )}
    </header>
  );
}
