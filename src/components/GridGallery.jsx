import React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import {Container} from '../globalStyles';
import { GridContainer, GridImg } from "./GridElements";

import "./grid.css";

const GridGallery = ({ dataImg }) => {
  return (
    <Container>
        <GridContainer>
      <ImageList rowHeight={160} gap={5} className="imgList" cols={3}>
        {dataImg.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      </GridContainer>
    </Container>
  );
};

export default GridGallery;
