import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./components/router";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/cart-context";

export function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
