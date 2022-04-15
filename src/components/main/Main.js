import React from 'react';

import Slider from './slider/Slider';
import Bio from "./bio/Bio"

import {SliderData} from "./slider/SliderData"
import {MainDiv} from "./Main.styled"


function Main() {
  return (
    <MainDiv>
      <Bio/>
      <Slider slides={SliderData}/>
    </MainDiv>
  )
}

export default Main