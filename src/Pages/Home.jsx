import React from "react";
// import { homeObjOne, homeObjTwo } from '../components/Data/InfoSecData'
// import InfoSection from '../components/InfoSection/InfoSection'
// import Info from "../components/InfoNympho/Info";
// import {Who} from "../components/InfoNympho/InfoData";
import NavBar from "../components/navbar/NavBar";
import Intro from "../components/Intro/Intro";
import Epilogue from "../components/Intro2/Epilogue";
import Slider from "../components/slider/slider";
import Sliderz from "../components/Slide2/Slide2";
// import { SliderData } from '../components/slider/SliderData';

const Home = () => {
  return (
    <>
      <NavBar />
      <Intro />

      <Epilogue />
      <Sliderz />

      {/* <Slider slides={SliderData} /> */}
      {/* <Info {...Who}/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/> */}
    </>
  );
};

export default Home;
