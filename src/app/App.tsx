import { BrowserRouter, Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Maquinas } from "./pages/Maquinas";
import { DetalhesMaquina } from "./pages/DetalhesMaquina";
import { SobreMiniusadas } from "./pages/SobreMiniusadas";
import { QueroAnunciar } from "./pages/QueroAnunciar";
import { Contato } from "./pages/Contato";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F7F7F7" }}>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/maquinas" element={<Maquinas />} />
            <Route path="/maquinas/:id" element={<DetalhesMaquina />} />
            <Route path="/sobre" element={<SobreMiniusadas />} />
            <Route path="/anunciar" element={<QueroAnunciar />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
