import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addItem: (item) => {
        const existing = get().cartItems.find((i) => i.id === item.id);
        if (existing) {
          set({
            cartItems: get().cartItems.map((i) =>
              i.id === item.id
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ cartItems: [...get().cartItems, item] });
        }
      },
      removeItem: (id) =>
        set({ cartItems: get().cartItems.filter((i) => i.id !== id) }),
      updateQuantity: (id, quantity) =>
        set({
          cartItems: get().cartItems.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        }),
      clearCart: () => set({ cartItems: [] }),
    }),
    { name: "mini-commerce-cart" }
  )
);
