import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("jashu-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [toastMessage, setToastMessage] = useState("");

  // Save cart data in LocalStorage
  useEffect(() => {
    localStorage.setItem("jashu-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product) => {
    const quantityToAdd = product.quantity || 1;

    setToastMessage("Product added to cart successfully!");

    setCartItems((previousItems) => {
      const existingProduct = previousItems.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return previousItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantityToAdd,
              }
            : item,
        );
      }

      return [...previousItems, { ...product, quantity: quantityToAdd }];
    });
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== id),
    );
  };
  const clearCart = () => {
  setCartItems([]);
};

  // Calculate total quantity
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate total price
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const updateQuantity = (id, quantity) => {
    setCartItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
      ),
    );
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        toastMessage,
        setToastMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook
export function useCart() {
  return useContext(CartContext);
}
