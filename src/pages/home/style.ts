import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const EcommerceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  max-width: 1120px;
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  gap: 32px;
  max-width: 1120px;
  width: 100%;
`;

export const EcommerceTitle = styled.h1`
  font-family: "Baloo 2";
  font-style: extrabold;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
`;
