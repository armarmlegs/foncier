import styled from "styled-components";
import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";

export const SliderContainer = styled.section`
  /* position:relative; */
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const SliderImage = styled.img`
  width: auto;
  height: 300px;
  border-radius: 10px;
  /* object-fit:cover */
`;

export const ArrowLeft = styled(FaArrowAltCircleLeft)`
  position:absolute;
  /* top: 50%; */
  left: 1px;
  font-size: 3rem;
  color: #000;
  z-index:10;
  cursor:pointer;
  user-select:none;
`;
export const ArrowRight = styled(FaArrowAltCircleRight)`
  position:absolute;
  /* top: 50%; */
  right: 1px;
  font-size: 3rem;
  color: #000;
  z-index:10;
  cursor:pointer;
  user-select:none;
`;

export const SlipnSlide = styled.div`

opacity:0;
    
    opacity:1;
    transition-duration:1s;
    

    /* &:active{
        transition-duration:1s ease;
     
    } */
`
