import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import {
  SuccessContainer,
  SuccessContent,
  SuccessDescription,
  SuccessDescriptionInformation,
  SuccessInformation,
  SuccessTitle,
  ShippingInfo,
  DeliveryTimeInfo,
  PaymentInfo,
  ImageContainer,
} from "./style";

import image from "../../assets/Illustration.png";
import { HeadBannerIcon } from "../home/components/head-banner/style";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

interface ISuccessProps {}

function Shipping() {
  const { confirmationData } = useContext(CartContext);
  return (
    <ShippingInfo>
      Entrega em{" "}
      <strong>
        {confirmationData.street}, {confirmationData.number}
      </strong>
      , {confirmationData.city} - {confirmationData.uf.toUpperCase()}
    </ShippingInfo>
  );
}

export function Success({}: ISuccessProps) {
  const { confirmationData } = useContext(CartContext);

  const paymentMethod = {
    creditCard: "Cartão de Crédito",
    debitCard: "Cartão de Débito",
    money: "Dinheiro",
  }[confirmationData.paymentMethod];

  return (
    <SuccessContainer>
      <SuccessContent>
        <div>
          <SuccessTitle>Uhu! Pedido confirmado</SuccessTitle>
          <SuccessDescription>
            Agora é só aguardar que logo o café chegará até você
          </SuccessDescription>

          <SuccessInformation>
            <SuccessDescriptionInformation>
              <HeadBannerIcon bgColor="#8047F8">
                <MapPin weight="fill" fill="#fff" />
              </HeadBannerIcon>
              <Shipping />
            </SuccessDescriptionInformation>
            <SuccessDescriptionInformation>
              <HeadBannerIcon bgColor="#DBAC2C">
                <Timer weight="fill" fill="#fff" />
              </HeadBannerIcon>
              <DeliveryTimeInfo>
                Previsão de entrega <br />
                <strong>20 min - 30 min</strong>
              </DeliveryTimeInfo>
            </SuccessDescriptionInformation>
            <SuccessDescriptionInformation>
              <HeadBannerIcon bgColor="#C47F17">
                <CurrencyDollar weight="fill" fill="#fff" />
              </HeadBannerIcon>
              <PaymentInfo>
                Pagamento na entrega
                <br />
                <strong>{paymentMethod}</strong>
              </PaymentInfo>
            </SuccessDescriptionInformation>
          </SuccessInformation>
        </div>
        <ImageContainer>
          <img src={image} alt="Ilustração de confirmação de pedido" />
        </ImageContainer>
      </SuccessContent>
    </SuccessContainer>
  );
}
