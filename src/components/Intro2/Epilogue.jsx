import React from "react";

import {
  // Heading,
  EpiContainer,
  EpiRow,
  EpiWrapper,
  TopLine,
  Subtitle,
} from "./EpilogueElements";

const Epilogue = () => {
  return (
    <>
      <EpiContainer>
        <EpiWrapper>
          <EpiRow>
            <EpiWrapper>
              {/* <Heading>Foncière Truffaut</Heading> */}
              <TopLine>Qui sommes Nous ?</TopLine>
              <Subtitle>
                
              Foncière Truffaut est un promoteur immobilier proposant des logements suite à des
              opérations de marchands de biens (rénovation, réhabilitation, ou transformation en
              logements) ou bien des programmes neufs.
              </Subtitle>
              <Subtitle>
              Fondé en 2014 par Alexandre Queiroz, Foncière Truffaut a la particularité d’effectuer des
              programmes immobiliers vendus achevés. Cette orientation permet une forte application
              architecturale et technique, avec l’aide de différents partenaires lors de l’ensemble du
              process : architectes, bureau d’études, bureau de contrôle et entreprises.
              </Subtitle>
              <Subtitle>
              Ainsi les biens immobiliers proposés sont pensés dans les moindres détails en optimisant au
              maximum les espaces selon les modes de vie contemporain, en choisissant des matériaux
              premium pour un bien être optimal et en proposant la meilleure solution pour une qualité
              énergétique performante tout en respectant l’environnement.
              </Subtitle>
            </EpiWrapper>
          </EpiRow>
        </EpiWrapper>
      </EpiContainer>
    </>
  );
};

export default Epilogue;



