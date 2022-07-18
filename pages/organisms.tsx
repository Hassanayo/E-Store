import React, { useEffect, useState } from "react";
import { Divider, FlexBox } from "../src/atoms/Boxes";
import { GridBox } from "../src/atoms/GridSystem";
import Steps from "../src/atoms/Steps";
import { LayoutWrapper } from "../src/layout/layout.style";
import CallToAction from "../src/molecules/CallToAction";
import Banner, { BannerTwo } from "../src/organisms/Banner";
import Carousel from "../src/organisms/Carousel";
import Header from "../src/organisms/Header";
import Hero from "../src/organisms/Hero";
import ProductCard from "../src/molecules/ProductCard";
import CarouselProducts from "../src/organisms/CarouselProducts";
import DownloadSection from "../src/organisms/Download";
import Footer from "../src/organisms/Footer";
import Megamenu from "../src/organisms/MegaMenu";
import Button from "../src/atoms/Buttons";
import ShoppingCart from "../src/organisms/Cart";

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
      <Header />
      
      
      
      <LayoutWrapper>
        <Hero />
        <Banner />
        <CallToAction />
        <CarouselProducts />
        <BannerTwo />
        <DownloadSection />
        <Footer />
      </LayoutWrapper>
    </>
  );
}
