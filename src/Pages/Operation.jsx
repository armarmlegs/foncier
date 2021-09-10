import React from "react";
import InfoSection from "../components/InfoSection/InfoSection";

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/Data/InfoSecData";
import NavBar from "../components/navbar/NavBar";
import { OpTitle } from "./OperationElements";

const Operation = () => {
  return (
    <div>
      <NavBar />

      
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </div>
  );
};

export default Operation;
