import React from "react";

import {
  IntroBg,
  IntroContainer,
  VideoBg,
 
} from "./IntroElements";
import Video from "../../Images/Videos/Video Fonciere/Fonciere Signature.mp4"


const Intro = () => {
  return (
    <IntroContainer>
      <IntroBg>
        <VideoBg autoPlay muted src={Video} type="video/mp4"></VideoBg>
       
      </IntroBg>
      
       
     
     
    </IntroContainer>
  );
};

export default Intro;
