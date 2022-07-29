import React from "react";
import { useViewport } from "../context/viewportContext";
import MobileHeader from "../MobileComponents/MobileHeader";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import { LayoutWrapper } from "./layout.style";

export default function LayoutBody({ children }: { children: React.ReactNode }) {
  const {isMobile} = useViewport()
  return (
    <LayoutWrapper>
      <nav>
        {isMobile ? <MobileHeader/> : <Header/>}
      </nav>
      {children}

      <footer>
        <Footer />
      </footer>
    </LayoutWrapper>
  );
}
