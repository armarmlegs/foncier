import React from "react";
import Navbar3 from "../../components/navbar/NavBar";
import GridGallery from "../../components/GridGallery";
import {
  OpColumn1,
  OpHeading,
  OpTextWrapper,
  OpSubtitle,
  OpTopLine,
  OpRow,
} from "../JulesFerry/JulesElements";
import { PicsMalsherbes } from "../../components/GridData";

import { Container } from "../../globalStyles";

const Malsherbes = () => {
  return (
    <>
      <Navbar3 />
      <Container>
        <OpRow>
          <OpColumn1>
            <OpTextWrapper>
             
              <OpHeading>Malesherbes 2015-2016 Paris 8</OpHeading>
              <OpTopLine>
                Architecte et Maître d’œuvre : Santillane Design
              </OpTopLine>
              <OpSubtitle>
              Transformation d’une surface de bureaux de 250m² en 1 logement de 7 pièces. 
              </OpSubtitle>
            </OpTextWrapper>
          </OpColumn1>
        </OpRow>
      </Container>

      <GridGallery dataImg={PicsMalsherbes} />
    </>
  );
};

export default Malsherbes;
