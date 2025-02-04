import { ShoppingCartSimple } from "phosphor-react";
import { CartButton } from "../../../../components/ui/cart-button";
import { InputNumber } from "../../../../components/ui/input-number";

import {
  CardContainer,
  CardDescription,
  CardFooter,
  CardImage,
  CardPrice,
  CardTitle,
  Tag,
  TagsContainer,
} from "./style";
import { useEffect, useState } from "react";
import { type CartItem } from "../../../../context/cart-context";

export enum Tags {
  TRADICIONAL = "TRADICIONAL",
  COM_LEITE = "COM LEITE",
  ESPECIAL = "ESPECIAL",
  ALCOÓLICO = "ALCOÓLICO",
  GELADO = "GELADO",
}

interface ICardProps {
  tag: Tags[];
  src: string;
  price: number;
  description: string;
  title: string;

  addCartItem: (item: CartItem) => void;
  cartItems: CartItem[];
}

export function Card({
  tag,
  src,
  price,
  description,
  title,
  addCartItem,
  cartItems,
}: ICardProps) {
  const [number, setNumber] = useState(1);

  const handleAddCartItem = () => {
    addCartItem({
      id: Math.random(),
      title,
      description,
      price: (price * number).toFixed(2),
      src,
      tag,
      quantity: number,
    });
  };

  const increaseNumber = () => setNumber((prev) => prev + 1);
  const decreaseNumber = () =>
    setNumber((prev) => (prev > 1 ? prev - 1 : prev));

  useEffect(() => {}, [cartItems]);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <CardContainer>
          <CardImage src={src} />
          <TagsContainer>
            {tag.map((item, index) => (
              <Tag key={index}>{item}</Tag>
            ))}
          </TagsContainer>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <CardFooter>
            <CardPrice>
              <div
                style={{
                  fontFamily: "Roboto",
                  fontSize: "14px",
                }}
              >
                R$
              </div>
              {(number * price).toFixed(2)}
            </CardPrice>
            <InputNumber
              addNumber={increaseNumber}
              removeNumber={decreaseNumber}
              number={number}
            />
            <CartButton onClick={handleAddCartItem}>
              <ShoppingCartSimple weight="fill" fill="#fff" />
            </CartButton>
          </CardFooter>
        </CardContainer>
      </div>
    </>
  );
}
