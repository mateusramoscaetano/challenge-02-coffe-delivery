import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import { LayoutContainer } from "./style";

interface IDefaultLayoutProps {}

export function DefaultLayout({}: IDefaultLayoutProps) {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Outlet />
      </LayoutContainer>
    </>
  );
}
