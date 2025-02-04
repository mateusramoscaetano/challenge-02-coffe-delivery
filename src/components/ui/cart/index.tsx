import { ShoppingCartSimple } from "phosphor-react";
import { CartContainer, CartCounter } from "./style";
import { CartContext } from "../../../context/cart-context";
import { useContext, useEffect } from "react";

export function Cart() {
  const { cartItems } = useContext(CartContext);

  useEffect(() => {}, [cartItems]);

  if (cartItems.length === 0) {
    return (
      <>
        <CartContainer>
          <ShoppingCartSimple size={22} weight="fill" />
        </CartContainer>
      </>
    );
  }

  if (cartItems.length >= 1) {
    return (
      <>
        <CartContainer>
          <ShoppingCartSimple size={22} weight="fill" />
          <CartCounter>{cartItems.length}</CartCounter>
        </CartContainer>
      </>
    );
  }
}
