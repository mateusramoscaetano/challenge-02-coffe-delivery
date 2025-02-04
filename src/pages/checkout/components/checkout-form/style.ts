import styled from "styled-components";

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const CheckoutFormTitle = styled.h1`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};

  margin-bottom: 15px;
`;

export const CheckoutFormIntro = styled.div`
  display: flex;

  margin-bottom: 32px;
  gap: 8px;
  h1 {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 16px;
`;

export const NumberAndCvc = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 12px;
`;

export const DistrictAndCity = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 12px;

  :first-child {
    max-width: 200px;
  }

  :last-child {
    max-width: 60px;
  }
`;
