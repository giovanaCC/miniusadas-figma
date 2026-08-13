const configuredUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, "");
const API_ORIGIN = configuredUrl || "https://miniusadas-production-eac1.up.railway.app";
const API_BASE = `${API_ORIGIN}/api`;

export type UserRole = "admin" | "dealer";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  dealer_id?: string | null;
  dealer_name?: string | null;
};

export type ListingSummary = {
  id: string;
  title: string;
  category: string;
  model?: string | null;
  year?: number | null;
  hours_used?: number | null;
  price: string | number;
  dealer_name?: string | null;
  city?: string | null;
  state?: string | null;
  region?: string | null;
  cover_url?: string | null;
  status?: string;
  rejection_reason?: string | null;
};

const demoListings: ListingSummary[] = [
  { id: "demo-1", title: "Trator YANMAR YT347", category: "mini_retroescavadeira", model: "YT347", year: 2022, hours_used: 320, price: 148000, dealer_name: "AgroSul Máquinas", city: "Campinas", state: "SP", status: "published" },
  { id: "demo-2", title: "Miniescavadeira YANMAR VIO55", category: "mini_escavadeira", model: "VIO55", year: 2021, hours_used: 1100, price: 210000, dealer_name: "AgroSul Máquinas", city: "São Paulo", state: "SP", status: "pending_approval" },
  { id: "demo-3", title: "Miniescavadeira YANMAR SV100", category: "mini_escavadeira", model: "SV100", year: 2023, hours_used: 180, price: 285000, dealer_name: "AgroSul Máquinas", city: "Curitiba", state: "PR", status: "draft" },
  { id: "demo-4", title: "Mini pá carregadeira YANMAR V4-7", category: "mini_pa_carregadeira", model: "V4-7", year: 2020, hours_used: 890, price: 175000, dealer_name: "Constru Tech SP", city: "Ribeirão Preto", state: "SP", status: "paused" },
];

function isDemoSession() {
  return localStorage.getItem("miniusadas_token")?.startsWith("demo-") ?? false;
}

function updateDemoListing(id: string, status: string) {
  const item = demoListings.find((listing) => listing.id === id);
  if (item) item.status = status;
  return Promise.resolve(item);
}

type RequestOptions = {
  method?: string;
  body?: unknown;
};

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const token = localStorage.getItem("miniusadas_token");
  const response = await fetch(`${API_BASE}${path}`, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    if (response.status === 401) {
      localStorage.removeItem("miniusadas_token");
      localStorage.removeItem("miniusadas_user");
    }
    throw new Error(data.error || `Erro ${response.status}`);
  }
  return data as T;
}

export const listingsApi = {
  list: (params: Record<string, string | number> = {}) => {
    const query = new URLSearchParams(
      Object.entries(params)
        .filter(([, value]) => value !== "" && value !== undefined)
        .map(([key, value]) => [key, String(value)]),
    ).toString();
    return apiRequest<{ data: ListingSummary[]; total: number }>(`/listings${query ? `?${query}` : ""}`);
  },
  getById: (id: string) => apiRequest<any>(`/listings/${id}`),
  sendLead: (id: string, body: { name: string; email: string; phone: string; message: string }) =>
    apiRequest(`/listings/${id}/leads`, { method: "POST", body }),
};

export const authApi = {
  login: (email: string, password: string) =>
    apiRequest<{ token: string; user: User }>("/auth/login", { method: "POST", body: { email, password } }),
};

export const dealerApi = {
  listings: () => isDemoSession() ? Promise.resolve(demoListings.filter((item) => item.dealer_name === "AgroSul Máquinas")) : apiRequest<ListingSummary[]>("/dealer/listings"),
  create: (body: {
    title: string;
    category: string;
    model?: string;
    year?: number;
    hours_used?: number;
    price: number;
    description?: string;
  }) => {
    if (!isDemoSession()) return apiRequest<ListingSummary>("/dealer/listings", { method: "POST", body });
    const item: ListingSummary = { id: `demo-${Date.now()}`, ...body, dealer_name: "AgroSul Máquinas", status: "draft" };
    demoListings.unshift(item);
    return Promise.resolve(item);
  },
  submit: (id: string) => isDemoSession() ? updateDemoListing(id, "pending_approval") : apiRequest(`/dealer/listings/${id}/submit`, { method: "PATCH" }),
  pause: (id: string) => isDemoSession() ? updateDemoListing(id, "paused") : apiRequest(`/dealer/listings/${id}/pause`, { method: "PATCH" }),
  sold: (id: string) => isDemoSession() ? updateDemoListing(id, "sold") : apiRequest(`/dealer/listings/${id}/sold`, { method: "PATCH" }),
};

export const adminApi = {
  listings: (status = "") => isDemoSession() ? Promise.resolve(status ? demoListings.filter((item) => item.status === status) : demoListings) : apiRequest<ListingSummary[]>(`/admin/listings${status ? `?status=${status}` : ""}`),
  approve: (id: string) => isDemoSession() ? updateDemoListing(id, "published") : apiRequest(`/admin/listings/${id}/approve`, { method: "PATCH" }),
  reject: (id: string, reason: string) => isDemoSession() ? updateDemoListing(id, "draft") : apiRequest(`/admin/listings/${id}/reject`, { method: "PATCH", body: { reason } }),
};

export function formatPrice(value: string | number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(Number(value));
}

export const categoryLabel: Record<string, string> = {
  mini_escavadeira: "Miniescavadeiras",
  mini_pa_carregadeira: "Mini pás carregadeiras",
  mini_retroescavadeira: "Mini retroescavadeiras",
};
