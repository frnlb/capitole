import { useWishlistStore } from "@/store/wishlist";

export const useWishlist = () => {
  const {
    items,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
  } = useWishlistStore();

  return {
    wishlistItems: items,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
    wishlistCount: items.length,
  };
};
