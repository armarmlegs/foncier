import styled from "styled-components";

export const ContactWrapper = styled.div`
 display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr; 
  gap: 4px 0px; 
  grid-template-areas: 
    ". ."; 
  justify-items: center; 
  width: 100%; 
  height: 100%; 
  max-width:1000px;
  @media screen and (max-width: 960px) {
    width: 100%;
    height:1000px;
   

    transition: 0.2s all ease;
  } 
`;

export const ContactLeft = styled.img`
  position: relative;
  
width:100%;
  height: 100%;
  object-fit: cover;
  
  /* top: 80; */

  @media screen and (max-width: 768px) {
    width: 200px;
    
    
  }
  @media screen and (max-width: 400px) {
    width: 150px;
    
    
  }
`;

export const ContactRight = styled.div`
/* border:1px solid black; */


  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: stretch;
  width: 100%;
  height: 100%;
  padding: 5rem 3.5rem;
  color: black;

  @media screen and (max-width: 768px) {
    width:220px;
    
  }
`;

export const ContactH1 = styled.h1`
  text-transform: uppercase;
  font-size: 50px;
  letter-spacing: 0.5rem;
  font-weight: 300;
  color: black;
  @media screen and (max-width: 768px) {
    font-size: 34px;
  }

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;
export const ContactP = styled.p`
  font-size: 15px;
  font-weight: 300;
  width: 40vw;
  margin: 0.25rem 0;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
export const ContactFormX = styled.form`
  width: 100%;
  position: relative;
  margin-top: 2rem;
  padding: 1rem 0;

  @media screen and (max-width:765px){
    
  }
`;
export const ContactLabel = styled.label`
  text-transform: uppercase;
  display: block;
  padding: 20px 0;
  font-size: 15px;
  margin-bottom: 2px;
`;

export const ContactInput = styled.input`
  font-weight: 500;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 18px;
  margin-bottom: 30px;
`;
export const ContactArea = styled.textarea`
  font-weight: 500;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 18px;
  resize: none;
  margin-bottom: 30px;
`;

export const ImageWrapper = styled.div`
width:100%;
/* border:1px solid black; */





`
