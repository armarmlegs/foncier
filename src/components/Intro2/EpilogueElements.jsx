import styled from "styled-components";


export const EpiContainer = styled.div`
  color: #fff;
  background: #f9F9F9;
  min-height:800px;
  padding-top:100px;

  @media screen and (max-width:768px) {
    padding: 100px 0;
  }
`;


export const EpiWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position:relative;
	
	justify-content: center;
	align-items: stretch;
	align-content: stretch;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
 
  
`

export const EpiRow = styled.div`
  
  /* display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1", "col2", "col3";

  @media screen and (max-width:768px) {
    grid-template-areas: "col1" "col2" "col3"
  } */
`;



export const TextWrapper = styled.div`
  max-width: auto;
  padding-top: 0;
  padding-bottom: 60px;
  border: 1px solid black;
`;

export const TopLine = styled.p`
  color: #6b705c;
  padding-top:20px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #010606;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: auto;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 24px;
  color: #010606
`;