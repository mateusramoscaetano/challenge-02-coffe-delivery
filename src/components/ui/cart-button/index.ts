import styled from "styled-components";

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 6px;
  padding: 8px;
  background: ${(props) => props.theme["purple-dark"]};

  border: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["purple"]};
  }
`;
