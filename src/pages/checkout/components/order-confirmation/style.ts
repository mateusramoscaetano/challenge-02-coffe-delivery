import styled from "styled-components";

export const BackgroundOrder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;

  background: ${(props) => props.theme["base-card"]};
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
`;
