import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;

  grid-template-columns: 1fr 448px;
  gap: 32px;

  width: 100%;
  height: 100vh;

  padding: 92px 160px;
`;

export const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;

  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
`;

export const Line = styled.div`
  width: 100%;

  height: 1px;
  background: ${(props) => props.theme["base-button"]};
  margin: 24px 0;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.04);
`;

export const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
`;

export const TotalItens = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 16px;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const TotalWithShipping = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 20px;
    color: ${(props) => props.theme["base-text"]};
    font-weight: 700;
  }
`;
