import React from "react";
import { useViewport } from "../Context/viewportContext";
import MobileFooter from "../MobileComponents/MobileFooter";
import MobileHeader from "../MobileComponents/MobileHeader";
import MobileMenu from "../MobileComponents/MobileMenu";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import ClientOnly from "../utils/clientOnly";
import { LayoutWrapper } from "./layout.style";

export default function LayoutBody({children}: {children: React.ReactNode;}) {
  const { isMobile } = useViewport();

  return (
    <ClientOnly>
      <LayoutWrapper>
        
        <nav>
          {isMobile ? <MobileHeader /> : <Header />}
        </nav>
        {children}
        <div className="mobile-menu">{isMobile ? <MobileMenu/> : ""}</div>

        <footer>
          {isMobile ? <MobileFooter/> : <Footer />}
        </footer>
      </LayoutWrapper>
    </ClientOnly>
  );
}
