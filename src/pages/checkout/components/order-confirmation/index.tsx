import { CheckoutCard } from "../../../../components/ui/checkout-card";
import {
  Line,
  ResumeContainer,
  TotalItens,
  TotalWithShipping,
} from "../../style";
import {
  CheckoutFormContainer,
  CheckoutFormTitle,
} from "../checkout-form/style";

import { useContext } from "react";
import { CartContext } from "../../../../context/cart-context";
import { PrimaryButton } from "../../../../components/ui/button";
import { BackgroundOrder } from "./style";

interface IOrderConfirmationProps {
  onSubmit: () => void;
}

export function OrderConfirmation({ onSubmit }: IOrderConfirmationProps) {
  const { cartItems } = useContext(CartContext);

  const totalItens = cartItems.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );

  const shippingPrice = 3.5;

  return (
    <>
      <CheckoutFormContainer>
        <CheckoutFormTitle>Cafés Selecionados</CheckoutFormTitle>
        <BackgroundOrder>
          {cartItems.map((item) => (
            <div>
              <CheckoutCard
                id={item.id}
                key={item.id}
                src={item.src}
                quantity={Number(item.quantity)}
                price={Number(item.price)}
                title={item.title}
              />
              <Line />
            </div>
          ))}

          <ResumeContainer>
            <TotalItens>
              <span>Total de itens</span>{" "}
              <span>R$ {totalItens.toFixed(2)}</span>
            </TotalItens>
            <TotalItens>
              <span>Entrega</span> <span>R$ {shippingPrice.toFixed(2)}</span>
            </TotalItens>
            <TotalWithShipping>
              <span>Total</span>{" "}
              <span>R$ {(totalItens + shippingPrice).toFixed(2)}</span>
            </TotalWithShipping>
          </ResumeContainer>
          <PrimaryButton onClick={onSubmit}>Confirmar Pedido</PrimaryButton>
        </BackgroundOrder>
      </CheckoutFormContainer>
    </>
  );
}
