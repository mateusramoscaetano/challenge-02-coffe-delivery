import { Coffee, Package, ShoppingCartSimple, Timer } from "phosphor-react";
import {
  HeadBannerContainer,
  HeadBannerDescription,
  HeadBannerDescriptionItem,
  HeadBannerDescriptionItemsContainer,
  HeadBannerIcon,
  HeadBannerImage,
  HeadBannerMainContent,
  HeadBannerTitle,
} from "./style";

interface IHeadBannerProps {}

export function HeadBanner({}: IHeadBannerProps) {
  return (
    <>
      <HeadBannerContainer>
        <HeadBannerMainContent>
          <div>
            <HeadBannerTitle>
              Encontre o café perfeito para qualquer hora do dia
            </HeadBannerTitle>
            <HeadBannerDescription>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </HeadBannerDescription>
          </div>

          <div>
            <HeadBannerDescriptionItemsContainer>
              <HeadBannerDescriptionItem>
                <HeadBannerIcon bgColor="#C47F17">
                  <ShoppingCartSimple weight="fill" fill="#fff" />
                </HeadBannerIcon>
                Compra simples e segura
              </HeadBannerDescriptionItem>
              <HeadBannerDescriptionItem>
                <HeadBannerIcon bgColor="#574f4d">
                  <Package weight="fill" fill="#fff" />
                </HeadBannerIcon>
                Embalagem mantém o café intacto
              </HeadBannerDescriptionItem>
              <HeadBannerDescriptionItem>
                <HeadBannerIcon bgColor="#Dbac1c">
                  <Timer weight="fill" fill="#fff" />
                </HeadBannerIcon>
                Entrega rápida e rastreada
              </HeadBannerDescriptionItem>
              <HeadBannerDescriptionItem>
                <HeadBannerIcon bgColor="#8047f8">
                  <Coffee weight="fill" fill="#fff" />
                </HeadBannerIcon>
                O café chega fresquinho até você
              </HeadBannerDescriptionItem>
            </HeadBannerDescriptionItemsContainer>
          </div>
        </HeadBannerMainContent>
        <HeadBannerImage src="./src/assets/Imagem.png" />
      </HeadBannerContainer>
    </>
  );
}
