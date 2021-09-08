import React, { useState } from "react";
import { SliderData } from "./SliderData";
import "./Slider.css";

import {
  SliderContainer,
  ArrowLeft,
  ArrowRight,
  SliderImage,
  SlipnSlide,
} from "./SliderElements";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  return (
    <SliderContainer>
      {SliderData.map((slide, index) => {
        return (
          <SlipnSlide
            // className={index === current ? "slide-active" : "slide"}
            key={index}
          >
            {index === current && (
              <SliderImage
                key={slide.index}
                src={slide.image}
                alt="wassup hater"
              />
            )}
            
          </SlipnSlide>
        )
      })}
      <ArrowLeft onClick={previousSlide} />
      <ArrowRight onClick={nextSlide} />
    </SliderContainer>
  );
};

export default Slider;
