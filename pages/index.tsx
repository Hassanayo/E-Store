import React, { useEffect, useState } from "react";
import { LayoutWrapper } from "../src/layout/layout.style";
import CallToAction from "../src/molecules/CallToAction";
import Banner, { BannerTwo } from "../src/organisms/Banner";
import Header from "../src/organisms/Header";
import Hero from "../src/organisms/Hero";
import CarouselProducts from "../src/organisms/CarouselProducts";
import DownloadSection from "../src/organisms/Download";
import Footer from "../src/organisms/Footer";
import LayoutBody from "../src/layout/Layout";

export default function Organisms() {
  const [isOpen, setIsOpen] = useState(false);
  function openMenu() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    isOpen && (document.documentElement.style.overflow = "hidden");
    !isOpen && (document.documentElement.style.overflow = "");
  }, [isOpen]);

  return (
    <>
      <LayoutBody>

        <Hero />
        <Banner />
        <CallToAction />
        <CarouselProducts />
        <BannerTwo />
        <DownloadSection />
      </LayoutBody>
    </>
  );
}
