import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 6px;
  padding: 8px;
  background: ${(props) => props.theme["yellow-light"]};
  position: relative;

  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const CartCounter = styled.div`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  top: -10px;
  right: -10px;
  background: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["white"]};
  font-weight: 700;
  font-size: 0.75rem;
  border-radius: 9999px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
