import React from "react";
import { Slide } from "react-slideshow-image";
import img1 from "../../Images/Photos Site Fonciere/Lacroix/IMG_4047.JPG"
import img2 from "../../Images/Photos Site Fonciere/Malesherbes/IMG_1419.jpg";
import img3 from "../../Images/Photos Site Fonciere/Jules-Ferry/2ème étage/IMG_2707.jpg";
import "bootstrap/dist/css/bootstrap.css";
import {Carousel} from 'react-bootstrap'
import "./Slide.css";
import { Link } from "react-router-dom";




const Sliderz = () => {



   
  return (
    <div className="containerSlide">
       
       <Carousel className="active">
  <Carousel.Item>
    <img
      className="d-block w-100 coup"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Malesherbes - Paris 8°</h3>
      <p>Transformation d’une surface de bureaux de 250m² en 1 logement de 7 pièces</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 coup"
      src={img3}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Jules-Ferry - Boulogne-Billancourt</h3>
      <p>Réhabilitation totale et surélévation d’un immeuble R+2 en R+5</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 coup"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Lacroix - Paris 17°</h3>
      <p>Réhabilitation d’un studio photo de 30m² en un appartement 2 pièces</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Sliderz;

// <SliderContainer>
//   <Slide {...properties}>
//     <SliderEach>
//       <SliderImages src={img1} />
//     </SliderEach>
//     <SliderEach>
//       <SliderImages src={img2} />
//     </SliderEach>
//     <SliderEach>
//       <SliderImages src={img3} />
//     </SliderEach>
//   </Slide>
// </SliderContainer>

// <div className="containerSlide">
//   <Slide {...properties}>
//     <div className="each-slide">
//       <img src={Img1} alt="img1" className="coup" />
//     </div>
//     <div className="each-slide">
//       <img src={Img2} className="coup" />
//     </div>
//     <div className="each-slide" className="coup">
//       <img src={Img3} />
//     </div>
//   </Slide>
// </div>
