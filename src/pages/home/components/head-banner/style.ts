import styled from "styled-components";

export const HeadBannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;

  gap: 56px;
  padding: 92px 160px;
`;

export const HeadBannerMainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;

  max-width: 588px;
  flex-direction: column;

  gap: 66px;
`;

export const HeadBannerTitle = styled.h1`
  font-family: "Baloo 2";
  font-style: extrabold;
  font-weight: 800;
  font-size: 48px;
  line-height: 130%;
  color: ${(props) => props.theme["base-title"]};
`;

export const HeadBannerDescription = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const HeadBannerImage = styled.img``;

export const HeadBannerDescriptionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
`;

export const HeadBannerDescriptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  white-space: nowrap;
`;

interface HeadBannerIconProps {
  bgColor?: string;
}

export const HeadBannerIcon = styled.div<HeadBannerIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 999px;
  width: 32px;
  height: 32px;
  background: ${(props) => props.bgColor || props.theme["yellow-dark"]};

  min-height: 32px;
  min-width: 32px;
`;
