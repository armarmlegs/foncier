import React from 'react';
import InfoSection from '../components/InfoSection/InfoSection';
import Lots from "../components/Lots/Lots"
import {LotsData} from "../components/Lots/LotsData"
import { homeObjTwo } from '../components/Data/InfoSecData';
import NavBar2 from '../components/navbar2/Navbar3';

const Operation = () => {
    return (
        <div>
            <NavBar2 />
            <InfoSection {...homeObjTwo}/>
            <Lots data={LotsData} />
            
        </div>
    )
}

export default Operation
