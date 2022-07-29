import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../src/theme";
import { CartContextProvider } from "../src/context/CartContext";
import { ViewportProvider } from "../src/context/viewportContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider {...pageProps}>
        <ViewportProvider>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ViewportProvider>
      </CartContextProvider>
    </>
  );
}

export default MyApp;
