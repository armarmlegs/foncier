import React, { useState } from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { Container } from "../globalStyles";
// import { IconWrapper } from "./GridElements";
// import { FaWindowClose } from "react-icons/fa";

import "./grid.css";

const GridGallery = ({ dataImg }) => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (img) => {
    setTempImgSrc(img);
    setModel(true);
  };

  return (
    <>
      <div
        className={model ? "model open" : "model"}
        onClick={() => {
          setModel(false);
        }}
      >
        <img src={tempImgSrc} alt="helloKitty" />
       
      </div> 
      <div className="gallery">
        {dataImg.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.img)}>
              <img src={item.img} alt={item.id} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
     
    </>
  );
};

export default GridGallery;
