import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 184px;
`;

export const SuccessContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  max-width: 1120px;
`;

export const SuccessTitle = styled.h1`
  font-family: "Baloo 2", cursive;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  color: ${(props) => props.theme["yellow-dark"]};
`;

export const SuccessDescription = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
`;

export const SuccessInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
  padding: 40px;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  background: ${(props) => `
    linear-gradient(${props.theme["background"]}, ${props.theme["background"]}) padding-box,
    linear-gradient(90deg, ${props.theme["yellow"]}, ${props.theme["purple"]}) border-box
  `};
`;

export const SuccessDescriptionInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ShippingInfo = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
  max-width: 354px;
`;

export const DeliveryTimeInfo = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
`;

export const PaymentInfo = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  position: relative;

  img {
    position: absolute;
    bottom: -13px;
    width: 492px;
    height: 293px;
  }
`;
