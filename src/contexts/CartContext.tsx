import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Tour } from "@/components/home/ExperienceSection";

export interface CartItem {
  tour: Tour;
  quantity: number;
  guests: number;
  selectedDate?: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (tour: Tour, guests?: number, selectedDate?: string) => void;
  removeFromCart: (tourId: string) => void;
  updateQuantity: (tourId: string, quantity: number) => void;
  updateGuests: (tourId: string, guests: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "flyout_cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (tour: Tour, guests: number = 1, selectedDate?: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.tour.id === tour.id);
      if (existing) {
        return prev.map((item) =>
          item.tour.id === tour.id
            ? { ...item, quantity: item.quantity + 1, guests: guests || item.guests }
            : item
        );
      }
      return [...prev, { tour, quantity: 1, guests, selectedDate }];
    });
  };

  const removeFromCart = (tourId: string) => {
    setItems((prev) => prev.filter((item) => item.tour.id !== tourId));
  };

  const updateQuantity = (tourId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(tourId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.tour.id === tourId ? { ...item, quantity } : item
      )
    );
  };

  const updateGuests = (tourId: string, guests: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.tour.id === tourId ? { ...item, guests: Math.max(1, guests) } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.tour.price * item.quantity * item.guests,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateGuests,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
