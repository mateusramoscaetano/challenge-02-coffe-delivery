import { MapPin } from "phosphor-react";
import { LocalizationContainer } from "./style";

interface ILocalizationProps {}

export function Localization({}: ILocalizationProps) {
  return (
    <>
      <LocalizationContainer>
        <MapPin size={22} weight="fill" color="#8047F8" />
        Curitiba, PR
      </LocalizationContainer>
    </>
  );
}
