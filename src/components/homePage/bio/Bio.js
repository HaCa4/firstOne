import React from "react";

//COMPONENTS
import { images } from "../../../constants/ImageURLs";
import { BioConstants } from "../../../constants/HomePageConstants";

//STYLED-COMPONENTS
import { BioDiv, ContextDiv, BioImage } from "./Bio.styled";

const Bio = () => {
  return (
    <BioDiv>
      <BioImage src={images.bio} />
      <ContextDiv style={{ marginTop: "1rem" }}>
        <h3 style={{ color: "#bc2000" }}>{BioConstants.name}</h3>
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
