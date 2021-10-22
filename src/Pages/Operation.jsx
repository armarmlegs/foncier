import React from "react";



// import {
//   homeObjOne,
//   homeObjTwo,
//   homeObjThree,
// } from "../components/Data/InfoSecData";
import NavBar from "../components/navbar/NavBar";
import OpGrid from "../components/OpGrid/OpGrid";
import {PicsOperation} from "../components/GridData";
import { OpTitle } from "./OperationElements";
import { WrapperForReal } from "./OperationElements";




const Operation = () => {
  return (
    <div>
      <NavBar />
      <WrapperForReal>
      <OpTitle>Nos Opérations</OpTitle>
      </WrapperForReal>
      
      <OpGrid dataImg={PicsOperation} />
      
    
    </div>
  );
};

export default Operation;
