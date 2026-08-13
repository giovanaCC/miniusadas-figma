import { Navigate } from "react-router";
import { useAuth } from "../AuthContext";
import type { UserRole } from "../api";

export function ProtectedRoute({ role, children }: { role: UserRole; children: React.ReactNode }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/entrar" replace />;
  if (user.role !== role) return <Navigate to={user.role === "admin" ? "/admin" : "/painel"} replace />;
  return children;
}
