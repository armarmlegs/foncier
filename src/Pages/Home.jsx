import React from 'react'
import { homeObjOne, homeObjTwo } from '../components/Data/InfoSecData'
import InfoSection from '../components/InfoSection/InfoSection'
import Info from "../components/InfoNympho/Info";
import {Who} from "../components/InfoNympho/InfoData"
import NavBar from "../components/navbar/NavBar"


const Home = () => {
    return (
        <>
        <NavBar/>
        <Info {...Who}/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
       
            
        </>
    )
}

export default Home
