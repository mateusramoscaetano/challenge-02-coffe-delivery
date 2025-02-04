import { useContext, useState } from "react";
import { CartContext } from "../../../context/cart-context";
import { InputNumber } from "../input-number";

import {
  CardContainer,
  ImageContainer,
  ProductDetails,
  ActionContainer,
  PriceContainer,
} from "./style";

import { TrashButton } from "../trash-button";
import { Trash } from "phosphor-react";

interface ICheckoutCardProps {
  id: number;
  src: string;
  title: string;
  quantity: number;
  price: number;
}

export function CheckoutCard({
  id,
  src,
  title,
  quantity,
  price,
}: ICheckoutCardProps) {
  const [number, setNumber] = useState(quantity);

  const { removeCartItem } = useContext(CartContext);

  const increaseNumber = () => {
    setNumber((prev) => prev + 1);
  };

  const decreaseNumber = () => {
    setNumber((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <CardContainer>
      <ImageContainer>
        <img src={src} alt={title} />
        <ProductDetails>
          <h1>{title}</h1>
          <ActionContainer>
            <InputNumber
              number={number}
              addNumber={increaseNumber}
              removeNumber={decreaseNumber}
            />
            <TrashButton onClick={() => removeCartItem(id)}>
              <Trash /> REMOVER
            </TrashButton>
          </ActionContainer>
        </ProductDetails>
      </ImageContainer>
      <PriceContainer>R$ {(number * price).toFixed(2)}</PriceContainer>
    </CardContainer>
  );
}
