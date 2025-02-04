import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  user-select: none;

  width: 256px;
  height: 310px;

  flex-direction: column;
  position: relative;

  background: ${(props) => props.theme["base-card"]};
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  padding-top: 112px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const CardImage = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  top: -20px;
`;

export const CardTitle = styled.h3`
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: ${(props) => props.theme["base-subtitle"]};
  margin-bottom: 8px;
`;

export const CardDescription = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme["base-label"]};
  margin-bottom: 33px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const CardPrice = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme["base-text"]};
  user-select: none;
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
`;

export const Tag = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 130%;
  text-align: center;
  color: ${(props) => props.theme["yellow-dark"]};
  background: ${(props) => props.theme["yellow-light"]};
  border-radius: 100px;
  padding: 4px 8px;
`;
