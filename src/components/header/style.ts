import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  padding: 33px 160px;

  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1;

  background: ${(props) => props.theme["background"]};
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
