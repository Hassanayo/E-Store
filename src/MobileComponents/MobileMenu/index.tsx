import { useRouter } from "next/router";
import React, { useState } from "react";
import {
    AddToCartIcon,
  HeartBlack,
  HeartIcon,
  HomeIcon,
  MenuSearch,
  PersonIcon,
} from "../../assets/vectors";
import CircleIcons from "../../atoms/CircleIcons";
import { Routes } from "../../constants/navigation";
import colors from "../../theme/colors";
import { MobileMenuContainer } from "./mobileMenu.style";

export default function MobileMenu() {
    const [isSelected, setIsSelected] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    function handleIndex(index: number){
        setCurrentIndex(index)

    }
    const router = useRouter();


  return (
    <MobileMenuContainer>
      
        {/* <HomeIcon onClick={setColor} colour={isSelected ? "black" : "#A3A5AD"} /> */}
      <div >
        <HomeIcon onClick={() => router.push(Routes.home)} colour="#A3A5AD"  className="icon"/>
      </div>
      <div>
        <MenuSearch colour="#A3A5AD" onClick={() => router.push(Routes.store)}/>
      </div>
      <div>
        <HeartBlack colour="#A3A5AD" className="icon" />
      </div>
      <div>
        <PersonIcon colour="#A3A5AD" />
      </div>
      <div className="fab" onClick={() => router.push(Routes.detailedCart)}>
        <CircleIcons colour={colors.brandPrimary} size="66px">
            <AddToCartIcon/>
        </CircleIcons>
      </div>
    </MobileMenuContainer>
  );
}
