import Navbar3 from "../../components/navbar/NavBar";
import GridGallery from "../../components/GridGallery";
import { VideoBg } from "./JulesElements";
import Video from "../../Images/Videos/Video Fonciere/Fonciere Truffaut.mp4";
import "../../components/OpGrid/Opstyle.css";
import {
  OpColumn1,
  OpHeading,
  OpTextWrapper,
  OpSubtitle,
  OpTopLine,
  OpRow,
  VideoWrapper,
  GridWrapper,
} from "./JulesElements";
import { PicsJulesFerry } from "../../components/GridData";
import { PicsJulesFerry2ndFloor } from "../../components/GridData";
import { PicsJulesFerryTriplex } from "../../components/GridData";

import { Container } from "../../globalStyles";

const JulesFerry = () => {
  return (
    <>
      <Navbar3 />
      <div>
        <OpRow>
          <OpColumn1>
            <OpTextWrapper>
              <OpHeading>Jules-Ferry 2016-2021 Boulogne-Billancourt</OpHeading>

              <OpSubtitle>
                Projet: Réhabilitation totale et surélévation d’un immeuble R+2
                en R+5, les 3 étages supplémentaires ont été construits sur la
                structure existante de l’immeuble en consolidant les fondations
                existantes.
              </OpSubtitle>
              <OpSubtitle>Au RDC : 1 Surface de bureaux de 43m².</OpSubtitle>
              <OpSubtitle>
                {" "}
                Au R+1 : 1 appartement de 72m² de 4 pièces.
              </OpSubtitle>
              <OpSubtitle>
                {" "}
                Au R+2 : 1 appartement de 72m² de 4 pièces{" "}.
              </OpSubtitle>
              <OpSubtitle>
                {" "}
                Au R+3 / R+4 / R+5 : 1 appartement en triplex de 150m² + balcon
                + terrasse.{" "}
              </OpSubtitle>
              <OpTopLine>
                Architecte et Maitre d’œuvre : Space Architectes x Sandrine
                Queiroz
              </OpTopLine>
            </OpTextWrapper>
          </OpColumn1>
        </OpRow>
        <VideoWrapper>
          <VideoBg autoPlay muted loop src={Video} />
        </VideoWrapper>
        <GridWrapper> 
        <OpTopLine>1er Etage</OpTopLine>
        <GridGallery dataImg={PicsJulesFerry} />
        <OpTopLine>2nd Etage</OpTopLine>
        <GridGallery dataImg={PicsJulesFerry2ndFloor} />
        <OpTopLine>Triplex</OpTopLine>
        <GridGallery dataImg={PicsJulesFerryTriplex} />
        </GridWrapper>
      </div>
      {/* <div className="ghostdiv"></div> */}
      
    </>
  );
};

export default JulesFerry;
