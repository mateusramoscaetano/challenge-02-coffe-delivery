import styled from "styled-components";

interface InputProps {
  hasError?: boolean;
}

export const Input = styled.input<InputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  border-radius: 6px;
  padding: 12px 8px;

  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};
  font-weight: 400;
  font-size: 14px;
  border: ${(props) => props.theme["base-button"]};

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    box-shadow: none;
    outline: 1px solid
      ${(props) =>
        props.hasError ? "1px solid red" : props.theme["yellow-dark"]};
    outline-offset: 1px;
  }

  border: ${(props) =>
    props.hasError ? "1px solid red" : props.theme["base-button"]};
`;

export const OptionalInputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 42px;
`;

export const OptionalText = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
  color: ${(props) => props.theme["base-label"]};
  font-style: italic;
  pointer-events: none;
`;
