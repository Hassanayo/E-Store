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
import colors from "../../theme/colors";
import { MobileMenuContainer } from "./mobileMenu.style";

export default function MobileMenu() {
    const [isSelected, setIsSelected] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    function handleIndex(index: number){
        setCurrentIndex(index)

    }
    

  return (
    <MobileMenuContainer>
      
        {/* <HomeIcon onClick={setColor} colour={isSelected ? "black" : "#A3A5AD"} /> */}
      <div >
        <HomeIcon  className="icon"/>
      </div>
      <div>
        <MenuSearch />
      </div>
      <div>
        <HeartBlack className="icon" />
      </div>
      <div>
        <PersonIcon />
      </div>
      <div className="fab">
        <CircleIcons colour={colors.brandPrimary} size="66px">
            <AddToCartIcon/>
        </CircleIcons>
      </div>
    </MobileMenuContainer>
  );
}
