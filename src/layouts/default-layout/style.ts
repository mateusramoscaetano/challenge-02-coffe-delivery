import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  height: calc(100vh - 10rem);

  background: ${(props) => props.theme["base-background"]};

  display: flex;
  flex-direction: column;
`;
