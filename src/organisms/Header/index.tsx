/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CartBlack, HeartBlack, PersonIcon } from "../../assets/vectors";
import { FlexBox } from "../../atoms/Boxes";
import { Routes } from "../../constants/navigation";
import { SearchbarSmall } from "../../molecules/Searchbar";
import ShoppingCart from "../Cart";
import Megamenu from "../MegaMenu";
import { HeaderContainer } from "./header.style";

export default function Header({ cart, deleteFromCart, setCart }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const router = useRouter();
  function openCart() {
    setCartOpen(true);
  }
  function openMenu() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    isOpen && (document.documentElement.style.overflow = "hidden");
    !isOpen && (document.documentElement.style.overflow = "");
    cartOpen && (document.documentElement.style.overflow = "hidden");
    !cartOpen && (document.documentElement.style.overflow = "");
  }, [isOpen, cartOpen]);

  return (
    <HeaderContainer>
      <FlexBox>
        <FlexBox alignItems="center" gap="80px">
          <div style={{ cursor: "pointer" }}>
            <img
              onClick={() => router.push(Routes.home)}
              src="/StoreLogo.png"
              alt="Logo"
            />
          </div>
          <FlexBox>
            <div className="nav-select">
              <FlexBox onClick={openMenu} className="step-box ">
                <p className="step-text">Women</p>
              </FlexBox>
              <FlexBox className="step-box">
                <p className="step-text">Men</p>
              </FlexBox>
              <FlexBox className="step-box">
                <p className="step-text">Kids</p>
              </FlexBox>
            </div>
          </FlexBox>
        </FlexBox>
      </FlexBox>
      <FlexBox alignItems="center" gap="40px">
        <SearchbarSmall />
        <FlexBox gap="30px">
          <PersonIcon />
          <HeartBlack />
          <div onClick={openCart}>
            <CartBlack />
          </div>
        </FlexBox>
      </FlexBox>
      {isOpen && <Megamenu SetIsOpen={setIsOpen} />}
      {cartOpen && (
        <ShoppingCart
          delete={deleteFromCart}
          setCart={setCart}
          cart={cart}
          setCartOpen={setCartOpen}
        />
      )}
    </HeaderContainer>
  );
}
