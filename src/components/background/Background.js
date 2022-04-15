import React from 'react';

import {MiniDiv, BackDiv} from "./Background.styled";

import Personal from './components/Personal';

const Background = () => {

  return (
    <BackDiv>
          <MiniDiv>Education</MiniDiv>
          <MiniDiv>Career</MiniDiv>
          <MiniDiv>Personal Life</MiniDiv>      
    </BackDiv>
  )
}

export default Background