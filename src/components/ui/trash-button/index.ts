import styled from "styled-components";

export const TrashButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 91px;
  height: 32px;
  border-radius: 6px;
  padding: 8px;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  font-weight: 400;
  font-size: 12px;
  border: none;
  cursor: pointer;
  gap: 4px;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }

  svg {
    color: ${(props) => props.theme["purple"]};
    width: 16px;
  }
`;
