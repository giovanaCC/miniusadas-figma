import { categoryLabel, formatPrice, ListingSummary } from "./api";

export type MachineCardData = {
  id: string | number;
  name: string;
  year: number;
  hours: string;
  condition: string;
  conditionColor: string;
  price: string;
  location: string;
  image: string;
  dealer: string;
  rating: number;
  category: string;
  model: string;
  badge?: string | null;
};

export const fallbackMachineImage =
  "https://images.unsplash.com/photo-1583024011792-b165975b52f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=900&q=80";

export function toMachineCard(listing: ListingSummary): MachineCardData {
  return {
    id: listing.id,
    name: listing.title,
    year: listing.year || new Date().getFullYear(),
    hours: `${Number(listing.hours_used || 0).toLocaleString("pt-BR")} h`,
    condition: "Usada",
    conditionColor: "#2D7A2D",
    price: formatPrice(listing.price),
    location: [listing.city, listing.state].filter(Boolean).join(" - ") || "Brasil",
    image: listing.cover_url || fallbackMachineImage,
    dealer: listing.dealer_name || "Concessionária autorizada YANMAR",
    rating: 4.9,
    category: categoryLabel[listing.category] || listing.category,
    model: listing.model || "YANMAR",
    badge: "Destaque",
  };
}
