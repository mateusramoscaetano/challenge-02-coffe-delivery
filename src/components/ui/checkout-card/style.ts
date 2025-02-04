import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  height: 80px;
  padding: 8px 4px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 8px;

  h1 {
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme["base-text"]};
  display: flex;
  align-items: start;
`;
