import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoSec = styled.div`

color: #000;
padding:160px 0;

width:auto;
background: ${({ lightBg }) => (lightBg ? '#fff' : "black") };



`


export const InfoRow = styled.div`
display:flex;
/* margin: 0 -15px -15px -15px; */
flex-wrap:wrap;
align-items:center;
flex-direction: ${({imgStart}) =>(imgStart ? 'row-reverse' : 'row')};
`

export const InfoColumn = styled.div`

margin-bottom:15px;
padding-right:15px;
padding-left:15px;
flex:1;
max-width:50%;
flex-basis:50%;

@media screen and (max-width:960px) {
    max-width:100%;
    flex-basis:100%;
    display:flex;
    justify-content:center;
    ;
}
`

export const TextWrapper = styled.div`

max-width:540px;
padding-top:0;
padding-bottom:60px;

@media screen and (max-width:768px) {
    padding-bottom:65px;
}
`

export const TopLine = styled.div`
color:${({lightTopLine}) =>(lightTopLine ? '#a9B3C1' : '#eddcd2')};

font-size:18px;
line-height:16px;
letter-spacing: 1.4px;
margin-bottom:16px;

`

export const Heading= styled.h1`  
  
margin-bottom:24px;
font-size:48px;
margin-bottom:48px;
line-height:1.1;
color:${({lightText}) =>(lightText ? "#cb997e" : "#fff" )};

`

export const Subtitle = styled.div`
max-width:440px;
margin-bottom:35px;
font-size:18px;
line-height:24px;
color:${({lightTextDesc}) =>(lightTextDesc ? "#000" : "#fff" )};
`

export const ImgWrapper = styled.div`


 /* max-width: 555px; */
  display: flex;
  max-height:450px;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};;
  /* border:1px solid red; */

  @media screen and (max-width:800px){
    max-width:450px;
    max-height:450px;
  }
`


export const Img = styled.img`

object-fit:cover;
padding-right: 0;
  border: 0;
  width:100%;
  max-width: 100%;
  vertical-align: middle;
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
  
  max-height: 100%;
  max-width:100%;`


export const VideoBg = styled.video`
padding-right: 0;

height:100%;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 100%;`;

  export const ButtonWraps = styled(Link)`
  
  padding-top:40px;
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center
  `