import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
  top:30px;
 
  
  padding: 0 30px;
  
  height: 500px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
   height:400px;
   /* margin-top:0; */
   
  }
`;

export const IntroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #fff;
  @media screen and (max-width: 768px) {
   /* object-fit:scale-down; */
   
   
  }
`;



console.log("hello")