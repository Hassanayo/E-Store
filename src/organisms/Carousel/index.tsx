/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { ArrowsLeft, ArrowsLeftLong, ArrowsRight, ArrowsRightLong } from "../../atoms/Arrows";
import { ArrowRight, ArrowRightLong } from "../../atoms/Arrows/arrows.style";
import { FlexBox } from "../../atoms/Boxes";
import { CarouselContainer } from "./carousel.style";

const cards = [
  {
    id: 0,
    left: <div className="card-blue"></div>,
    right: <div className="card-red"></div>,
  },
  {
    id: 1,
    left: <div className="card-blue"></div>,
    right: <div className="card-red"></div>,
  },
  {
    id: 2,
    left: <div className="card-blue"></div>,
    right: <div className="card-red"></div>,
  },
  {
    id: 3,
    left: <div className="card-blue"></div>,
    right: <div className="card-red"></div>,
  },
  {
    id: 4,
    left: <div className="card-blue"></div>,
    right: <div className="card-red"></div>,
  },
];

export default function Carousel({children, show} : any) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)
    useEffect(() => {
        setLength(children.length)
    }, [children])

    function next(){
        if (currentIndex < (length - show)){
            setCurrentIndex((prevState) => prevState + 1)
        }
    }
    function prev(){
        if (currentIndex > 0){
            setCurrentIndex((prevState) => prevState - 1)
        }
    }
  return (
    <CarouselContainer>
      <div className="carousel-wrapper">
        <ArrowsLeftLong onClick={prev}/>
        <div className="carousel-content-wrapper">
          <div className={`carousel-content show-${show}`} style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
            {children}
          </div>
        </div>
        {currentIndex < (length - show) && <ArrowsRightLong onClick={next}/>}
      </div>
    </CarouselContainer>
  );
}
