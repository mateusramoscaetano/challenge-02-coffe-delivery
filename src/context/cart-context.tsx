import { createContext, useState, type ReactNode } from "react";
import type { Tags } from "../pages/home/components/card";

interface CartContextType {
  addCartItem: (item: CartItem) => void;
  removeCartItem: (id: number) => void;

  cartItems: CartItem[];
  setCartItems: (cartItems: CartItem[]) => void;
  paymentMethod: string;
  setPaymentMethod: (paymentMethod: string) => void;

  confirmationData: ConfirmationData;
  updateConfirmationData: (confirmationData: Partial<ConfirmationData>) => void;
}

export interface CartItem {
  id: number;
  title: string;
  description: string;
  price: string;
  src: string;
  tag: Tags[];
  quantity: number;
}

export interface ConfirmationData {
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  paymentMethod: string;
  uf: string;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("");

  const [confirmationData, setConfirmationData] = useState<ConfirmationData>({
    cep: "",
    street: "",
    number: "",
    complement: "",
    district: "",
    city: "",
    paymentMethod: "",
    uf: "",
  });

  const addCartItem = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeCartItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateConfirmationData = (newData: Partial<ConfirmationData>) => {
    setConfirmationData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return (
    <CartContext.Provider
      value={{
        addCartItem,
        removeCartItem,
        cartItems,
        setCartItems,
        paymentMethod,
        setPaymentMethod,
        confirmationData,
        updateConfirmationData,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
