import React,{useState} from 'react'
import{FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa";

import {SliderDiv,Img} from "./Slider.styled"
import {SliderData} from "./SliderData"

function Slider({slides}) {

    const [current, setCurrent] =useState(0);
    const length=slides.length;

    const nextSlide=()=>{
        setCurrent(current=== length-1 ? 0 : current+1 );
    };
    const prevSlide=()=>{
        setCurrent(current=== 0 ? length-1 : current-1 );
    };

    if(!Array.isArray(slides)||slides.length<=0){
        return null
    };

  return (
    <SliderDiv>
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        { SliderData.map((slide,index)=>{
            return( 
                <div
                className={index===current?"slideActive" : "slide"}
                key={index}
                >
                    {index===current && (
                        <Img src={slide.image} alt="" />
                    )}

                </div>
        )})}
    </SliderDiv>
  );
};

export default Slider;