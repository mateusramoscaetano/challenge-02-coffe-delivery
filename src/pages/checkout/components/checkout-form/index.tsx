import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MapPinLine } from "phosphor-react";

import {
  CheckoutFormContainer,
  CheckoutFormIntro,
  CheckoutFormTitle,
  DistrictAndCity,
  NumberAndCvc,
  Form,
} from "./style";
import {
  Input,
  OptionalInputContainer,
  OptionalText,
} from "../../../../components/ui/input/style";
import { BackgroundContainer, CheckoutContainer } from "../../style";

import { PaymentMethod } from "../payment-method";
import { OrderConfirmation } from "../order-confirmation";
import { useContext } from "react";
import { CartContext } from "../../../../context/cart-context";
import { useNavigate } from "react-router-dom";

const checkoutSchema = z.object({
  cep: z.string().min(8, "CEP deve ter pelo menos 8 caracteres"),
  street: z.string().min(1, "Rua é obrigatória"),
  number: z.string().min(1, "Número é obrigatório"),
  complement: z.string().optional(),
  district: z.string().min(1, "Bairro é obrigatório"),
  city: z.string().min(1, "Cidade é obrigatória"),
  uf: z.string().length(2, "UF deve ter 2 caracteres"),
});

export type IFormData = z.infer<typeof checkoutSchema>;

export function CheckoutFormulary() {
  const { updateConfirmationData } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: zodResolver(checkoutSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data: IFormData) => {
    updateConfirmationData(data);

    navigate("/success");
  };

  return (
    <CheckoutContainer>
      <div>
        <CheckoutFormContainer>
          <CheckoutFormTitle>Complete seu pedido</CheckoutFormTitle>
          <BackgroundContainer>
            <CheckoutFormIntro>
              <MapPinLine size={22} />
              <div style={{ gap: "2px" }}>
                <h1>Endereço de Entrega</h1>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </CheckoutFormIntro>

            <Form>
              <Input
                placeholder="CEP"
                {...register("cep")}
                style={{ maxWidth: "200px" }}
                hasError={!!errors.cep}
              />

              <Input
                placeholder="Rua"
                {...register("street")}
                hasError={!!errors.street}
              />

              <NumberAndCvc>
                <Input
                  placeholder="Número"
                  {...register("number")}
                  style={{ maxWidth: "200px" }}
                  hasError={!!errors.number}
                />

                <OptionalInputContainer>
                  <Input
                    placeholder="Complemento"
                    {...register("complement")}
                    hasError={!!errors.complement}
                  />
                  <OptionalText>Opcional</OptionalText>
                </OptionalInputContainer>
              </NumberAndCvc>

              <DistrictAndCity>
                <Input
                  placeholder="Bairro"
                  {...register("district")}
                  hasError={!!errors.district}
                />

                <Input
                  placeholder="Cidade"
                  {...register("city")}
                  hasError={!!errors.city}
                />

                <Input
                  placeholder="UF"
                  {...register("uf")}
                  hasError={!!errors.uf}
                />
              </DistrictAndCity>
              <button type="submit" style={{ display: "none" }}></button>
            </Form>
          </BackgroundContainer>
        </CheckoutFormContainer>
        <PaymentMethod />
      </div>

      <div>
        <OrderConfirmation onSubmit={handleSubmit(onSubmit)} />
      </div>
    </CheckoutContainer>
  );
}
