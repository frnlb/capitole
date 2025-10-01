import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Film } from "@/types";

interface WishlistState {
  items: Film[];
  addToWishlist: (film: Film) => void;
  removeFromWishlist: (filmId: number) => void;
  isInWishlist: (filmId: number) => boolean;
  clearWishlist: () => void;
  getWishlistItems: () => Film[];
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      items: [],
      addToWishlist: (film) =>
        set((state) => ({
          items: state.items.some((item) => item.id === film.id)
            ? state.items
            : [...state.items, film],
        })),
      removeFromWishlist: (filmId) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== filmId),
        })),
      isInWishlist: (filmId) => get().items.some((item) => item.id === filmId),
      clearWishlist: () => set({ items: [] }),
      getWishlistItems: () => get().items,
    }),
    {
      name: "film-wishlist",
    }
  )
);
