import React from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";
import { LayoutWrapper } from "./layout.style";

export default function LayoutBody({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrapper>
      <nav>
        <Header />
      </nav>
      {children}

      <footer>
        <Footer />
      </footer>
    </LayoutWrapper>
  );
}
