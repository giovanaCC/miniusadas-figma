import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router";
import { LockKeyhole, Mail } from "lucide-react";
import { useAuth } from "../AuthContext";
import yanmarLogo from "../../imports/Logo_Yanmar_Horizontal_1.png";

export function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const user = await login(email, password);
      navigate(user.role === "admin" ? "/admin" : "/painel");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Credenciais inválidas.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[72vh] flex items-center justify-center px-4 py-14">
      <div className="w-full max-w-md">
        <div className="text-center mb-7">
          <img src={yanmarLogo} alt="YANMAR" className="h-9 mx-auto mb-4" />
          <h1 className="text-2xl font-extrabold text-gray-900">Acesso ao portal</h1>
          <p className="text-sm text-gray-500 mt-2">Área da concessionária e administração YANMAR</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl shadow-sm p-7 space-y-4">
          <label className="block">
            <span className="text-sm font-semibold text-gray-700">E-mail</span>
            <div className="mt-1.5 flex items-center gap-2 border border-gray-200 rounded px-3 py-2.5 focus-within:border-red-500">
              <Mail size={16} className="text-gray-400" />
              <input className="w-full outline-none text-sm" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-gray-700">Senha</span>
            <div className="mt-1.5 flex items-center gap-2 border border-gray-200 rounded px-3 py-2.5 focus-within:border-red-500">
              <LockKeyhole size={16} className="text-gray-400" />
              <input className="w-full outline-none text-sm" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
          </label>
          {error && <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded p-3">{error}</p>}
          <button disabled={loading} className="w-full text-white py-3 rounded font-bold disabled:opacity-60" style={{ backgroundColor: "#CC0000" }}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
        <Link to="/" className="block text-center text-sm text-gray-500 hover:text-red-600 mt-5">← Voltar ao portal</Link>
      </div>
    </div>
  );
}
