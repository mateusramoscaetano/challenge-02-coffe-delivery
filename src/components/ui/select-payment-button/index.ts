import styled from "styled-components";

export const SelectPaymentButton = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  height: 51px;
  border-radius: 6px;
  padding: 16px;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  font-weight: 400;
  font-size: 12px;
  border: none;
  cursor: pointer;
  gap: 12px;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  &:focus {
    outline: 0.2px solid ${(props) => props.theme["purple"]};
    outline-offset: 0.2px;
    background: ${(props) => props.theme["purple-light"]};
  }
`;
