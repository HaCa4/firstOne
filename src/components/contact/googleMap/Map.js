import React from "react";

//CSS: STYLED-COMPONENTS
import { Frame, MapDiv } from "./Map.styled";

//CONSTANTS
import { images } from "../../../constants/Images";

const Map = () => {
  return (
    <MapDiv>
      <Frame
        src={images.mapsIframe}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="asd"
      ></Frame>
    </MapDiv>
  );
};

export default Map;
