import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .carousel-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .carousel-content-wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .carousel-content {
    display: flex;
    transition: all 250ms linear;
    -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
    scrollbar-width: none;
  }
  .carousel-content::-webkit-scrollbar,
  .carousel-content::-webkit-scrollbar {
    display: none;
  }
  .carousel-content > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
}
.carousel-content.show-2 > * {
    width: 50%;
}

.carousel-content.show-3 > * {
    width: calc(100% / 3);
}

.carousel-content.show-4 > * {
    width: calc(100% / 4);
}
@media screen and (max-width: 1080px) {
  .carousel-content-wrapper {
    overflow: scroll;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 30px;
  }
  .arrows{
    display: none;
  }
  .carousel-content{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
}
@media screen and (max-width: 650px) {
  .carousel-content{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;

  }
}
  
`
