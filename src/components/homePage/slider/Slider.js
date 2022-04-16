import React, { useState } from "react";

//ICONS
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

//CSS: STYLED-COMPONENTS
import { SliderDiv, Image } from "./Slider.styled";

function Slider({ slides }) {
  //STATES
  const [current, setCurrent] = useState(0);

  const length = slides.length;

  //HELPER FUNCTIONS
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const RenderSlides = () => {
    return slides.map((slide, index) => (
      <div className={index === current ? "slideActive" : "slide"} key={index}>
        {index === current && <Image src={slide.image} alt="" />}
      </div>
    ));
  };

  return (
    <SliderDiv>
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {RenderSlides()}
    </SliderDiv>
  );
}

export default Slider;
