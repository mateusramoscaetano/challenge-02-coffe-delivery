import { HeaderContainer, HeaderItems } from "./style";
import logo from "../../assets/Logo.svg";

import { Cart } from "../ui/cart";
import { Localization } from "../ui/localization";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart-context";
import { Link } from "react-router-dom";

interface IHeaderProps {}

export function Header({}: IHeaderProps) {
  const { cartItems } = useContext(CartContext);
  useEffect(() => {}, [cartItems]);
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <HeaderItems>
          <Localization />
          <Link to="/checkout">
            <Cart />
          </Link>
        </HeaderItems>
      </HeaderContainer>
    </>
  );
}
