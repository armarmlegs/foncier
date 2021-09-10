import React from "react";
import Navbar3 from "../../components/navbar2/Navbar3";
import GridGallery from "../../components/GridGallery";
import {
  OpColumn1,
  OpHeading,
  OpTextWrapper,
  OpSubtitle,
  OpTopLine,
  OpRow,
} from "../JulesFerry/JulesElements";
import { Pics } from "../../components/GridData";

import { Container } from "../../globalStyles";

const Lacroix = () => {
  return (
    <>
      <Navbar3 />
      <Container>
        <OpRow>
          <OpColumn1>
            <OpTextWrapper>
              <OpTopLine>
                Architecte et Maître d’œuvre : Sandrine Queiroz
              </OpTopLine>
              <OpHeading>Lacroix 2014-2015 Paris 17</OpHeading>
              <OpSubtitle>
              Réhabilitation d’un studio photo de 30m² en un appartement 2 pièces, vendus achevés, clés en main.
              </OpSubtitle>
            </OpTextWrapper>
          </OpColumn1>
        </OpRow>
      </Container>

      <GridGallery dataImg={Pics} />
    </>
  );
};

export default Lacroix;
