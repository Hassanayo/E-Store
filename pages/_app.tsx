import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../src/theme";
import { CartContextProvider } from "../src/Context/CartContext";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
        <CartContextProvider {...pageProps}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </CartContextProvider>
    </>
  );
}

export default MyApp;
