import React from "react";

//COMPONENTS
import { images } from "../../../constants/Images";
import { BioConstants } from "../../../constants/MainPageConstants";

//STYLED-COMPONENTS
import { BioDiv, ContextDiv, BioImg } from "./Bio.styled";

const Bio = () => {
  return (
    <BioDiv>
      <BioImg src={images.bio} />
      <ContextDiv>
        <h3>{BioConstants.name}</h3>
        {BioConstants.title1}
        <br />
        {BioConstants.title2}
        <br />
        {BioConstants.title3}
      </ContextDiv>
    </BioDiv>
  );
};

export default Bio;
