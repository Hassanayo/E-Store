import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../src/theme";
import { useContext } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <>
      <GlobalStyles />
      
      <ThemeProvider theme={theme}>
        
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
