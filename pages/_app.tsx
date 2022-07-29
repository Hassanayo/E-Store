import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../src/theme";
import { CartContextProvider } from "../src/Context/CartContext";
import { ViewportProvider } from "../src/Context/viewportContext";
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
