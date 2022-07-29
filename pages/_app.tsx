import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../src/theme";
import { ViewportProvider } from "../src/context/viewportContext";
import { CartContextProvider } from "../src/context/CartContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ViewportProvider>
        <CartContextProvider {...pageProps}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </CartContextProvider>
      </ViewportProvider>
    </>
  );
}

export default MyApp;
