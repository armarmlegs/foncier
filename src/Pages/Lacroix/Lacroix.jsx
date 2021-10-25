import React from "react";
import Navbar3 from "../../components/navbar/NavBar";
import GridGallery from "../../components/GridGallery";
import "../../components/OpGrid/Opstyle.css"
import {
  OpColumn1,
  OpHeading,
  OpTextWrapper,
  OpSubtitle,
  OpTopLine,
  OpRow,
} from "../JulesFerry/JulesElements";
import { Pics } from "../../components/GridData";

// import { Container } from "../../globalStyles";

const Lacroix = () => {
  return (
    <>
      <Navbar3 />
      {/* <Container> */}
      <div>
        <OpRow>
          <OpColumn1>
            <OpTextWrapper>
              <OpHeading>Lacroix 2014-2015 Paris 17</OpHeading>
             
              <OpSubtitle>
                Projet:
               Réhabilitation d’un studio photo de 30m² en un appartement 2
                pièces, vendus achevés, clés en main.
              </OpSubtitle>
              <OpTopLine>
                Architecte et Maître d’œuvre : Sandrine Queiroz
              </OpTopLine>
            </OpTextWrapper>
          </OpColumn1>
        </OpRow>
        </div>
      {/* </Container> */}

      <GridGallery dataImg={Pics} />
      <div className="ghostdiv"></div>
     
    </>
  );
};

export default Lacroix;
