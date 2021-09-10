import React, { useState } from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { Container } from "../globalStyles";
import { GridContainer, GridImg, IconWrapper } from "./GridElements";
import { makeStyles } from "@material-ui/core/styles";
import { FaWindowClose } from "react-icons/fa";

import "./grid.css";

const GridGallery = ({ dataImg }) => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (img) => {

    setTempImgSrc(img);
    setModel(true);
    
  };

  

  return (
    <Container>
      {/* <GridContainer> */}
      <div className={ model ? "model open" : "model" }>
        <img src={tempImgSrc} />
        <IconWrapper>
        <FaWindowClose onClick={()=>{setModel(false)}} />
        </IconWrapper>


      </div>
      <ImageList rowHeight={200} gap={4} className="gallery">
        {dataImg.map((item) => (
          <ImageListItem
            className="pics"
            key={item.img}
            onClick={() => getImg(item.img)}
          >
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      {/* </GridContainer> */}
    </Container>
  );
};

export default GridGallery;
