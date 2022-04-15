import React from "react";

//COMPONENTS
import Slider from "./slider/Slider";
import Bio from "./bio/Bio";

//CONSTANTS
import { SliderData } from "../../constants/MainPageConstants";

//CSS: STYLED-COMPONENTS
import { MainDiv } from "./Main.styled";

function Main() {
  return (
    <MainDiv>
      <Bio />
      <Slider slides={SliderData} />
    </MainDiv>
  );
}

export default Main;
