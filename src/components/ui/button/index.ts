import styled from "styled-components";

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 46px;
  border-radius: 6px;
  padding: 12px 8px;
  background: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme["white"]};
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
