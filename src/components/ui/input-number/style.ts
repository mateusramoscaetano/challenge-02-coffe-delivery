import styled from "styled-components";

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  border-radius: 6px;
  padding: 12px 8px;
  max-width: 72px;

  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};
  font-weight: 400;
  font-size: 14px;
  border: none;

  svg {
    cursor: pointer;
    color: ${(props) => props.theme["purple"]};
  }

  svg:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const InputNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  border-radius: 6px;
  user-select: none;

  color: ${(props) => props.theme["base-title"]};

  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-text"]};
  font-weight: 400;
  font-size: 14px;
  border: none;
`;
