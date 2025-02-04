import { useContext, useEffect } from "react";
import { Card } from "./components/card";
import { HeadBanner } from "./components/head-banner";
import { CartContext } from "../../context/cart-context";
import { Cards } from "../../db/seed";
import {
  CardsGrid,
  EcommerceContainer,
  EcommerceTitle,
  HomeContainer,
} from "./style";

interface IHomeProps {}

export function Home({}: IHomeProps) {
  const { addCartItem, cartItems } = useContext(CartContext);

  useEffect(() => {}, [cartItems]);
  return (
    <>
      <HomeContainer>
        <HeadBanner />
        <EcommerceContainer>
          <EcommerceTitle>Nossos Cafés</EcommerceTitle>
          <CardsGrid>
            {Cards.map((item) => (
              <Card
                key={item.id}
                tag={item.tag}
                src={item.src}
                price={Number(item.price)}
                description={item.description}
                title={item.title}
                addCartItem={addCartItem}
                cartItems={cartItems}
              />
            ))}
          </CardsGrid>
        </EcommerceContainer>
      </HomeContainer>
    </>
  );
}
