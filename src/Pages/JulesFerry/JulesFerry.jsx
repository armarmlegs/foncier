import Navbar3 from "../../components/navbar2/Navbar3";
import GridGallery from "../../components/GridGallery";
import {
  OpColumn1,
  OpHeading,
  OpTextWrapper,
  OpSubtitle,
  OpTopLine,
  OpRow,
} from "./JulesElements";
import {Pics} from '../../components/GridData';

import React from "react";
import { Container } from "../../globalStyles";

const JulesFerry = () => {
  return (
    <>
      <Navbar3 />
      <Container>
        <OpRow>
          <OpColumn1>
            <OpTextWrapper>
              <OpTopLine>
                Architecte et Maitre d’œuvre : Space Architectes x Sandrine
                Queiroz
              </OpTopLine>
              <OpHeading>Jules-Ferry 2016-2021 Boulogne-Billancourt</OpHeading>
              <OpSubtitle>
                Réhabilitation totale et surélévation d’un immeuble R+2 en R+5,
                les 3 étages supplémentaires ont été construits sur la carcasse
                existante de l’immeuble en consolidant les fondations
                existantes. Rénovation totale de l’existant et construction
                neuve du R+3 au R+5. Programme vendu achevé proposant 4 lots :
                Au RDC : 1 Surface de bureaux de 43m² Au R+1 : 1 appartement de
                72m² de 4 pièces Au R+2 : 1 appartement de 72m² de 4 pièces Au
                R+3 / R+4 / R+5 : 1 appartement en triplex de 150m² + balcon +
                terrasse
              </OpSubtitle>
            </OpTextWrapper>
          </OpColumn1>
        </OpRow>
      </Container>

      <GridGallery dataImg={Pics} />
    </>
  );
};

export default JulesFerry;
