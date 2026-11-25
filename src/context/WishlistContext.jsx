
import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const savedWishlist = localStorage.getItem("jashu-wishlist");

    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save wishlist in LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "jashu-wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems]);

  // Add or remove product from wishlist
  const toggleWishlist = (product) => {
    setWishlistItems((previousItems) => {
      const alreadyExists = previousItems.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return previousItems.filter(
          (item) => item.id !== product.id
        );
      }

      return [...previousItems, product];
    });
  };

  // Check product in wishlist
  const isWishlisted = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isWishlisted,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
