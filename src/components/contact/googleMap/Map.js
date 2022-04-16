import React from "react";

//CSS: STYLED-COMPONENTS
import { Frame, MapDiv } from "./Map.styled";

//CONSTANTS
import { iframes } from "../../../constants/Iframes";

const Map = () => {
  return (
    <MapDiv>
      <Frame
        src={iframes.googleMapsIframe}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="asd"
      ></Frame>
    </MapDiv>
  );
};

export default Map;
