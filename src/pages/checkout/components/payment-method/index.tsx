import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { BackgroundContainer } from "../../style";
import {
  CheckoutFormContainer,
  CheckoutFormIntro,
} from "../checkout-form/style";
import { PaymentButtons } from "./style";
import { SelectPaymentButton } from "../../../../components/ui/select-payment-button";
import { useContext } from "react";
import { CartContext } from "../../../../context/cart-context";

export function PaymentMethod() {
  const { updateConfirmationData } = useContext(CartContext);

  const handleChangePaymentMethod = (state: string) => {
    updateConfirmationData({ paymentMethod: state });
  };

  return (
    <>
      <CheckoutFormContainer>
        <BackgroundContainer>
          <CheckoutFormIntro>
            <CurrencyDollar size={22} color="#8047F8" />
            <div style={{ gap: "2px" }}>
              <h1>Endereço de Entrega</h1>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </CheckoutFormIntro>
          <PaymentButtons>
            <SelectPaymentButton
              onClick={() => handleChangePaymentMethod("creditCard")}
            >
              <CreditCard size={16} color="#8047F8" />
              CARTÃO DE CRÉDITO
            </SelectPaymentButton>
            <SelectPaymentButton
              onClick={() => handleChangePaymentMethod("debitCard")}
            >
              <Bank size={16} color="#8047F8" />
              CARTÃO DE DÉBITO
            </SelectPaymentButton>
            <SelectPaymentButton
              onClick={() => handleChangePaymentMethod("money")}
            >
              <Money size={16} color="#8047F8" />
              DINHEIRO
            </SelectPaymentButton>
          </PaymentButtons>
        </BackgroundContainer>
      </CheckoutFormContainer>
    </>
  );
}
