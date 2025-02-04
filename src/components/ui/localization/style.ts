import styled from "styled-components";

export const LocalizationContainer = styled.div`
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  gap: 4px;

  max-width: 143px;

  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple"]};
  font-weight: 400;
  font-size: 0.875rem;

  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
