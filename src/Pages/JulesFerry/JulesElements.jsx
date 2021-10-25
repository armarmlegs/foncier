import styled from "styled-components";



export const OpContainer = styled.div`
  color: #fff;
  background: #f9F9F9;
  width:100%;
  height:100%;
  border:1px solid red;

  @media screen and (max-width:768px) {
    padding: 100px 0;
  }
`;

export const OpWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 800px;
  width: 1100px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const OpRow = styled.div`
  
  border:1px;
  /* display: grid;
  grid-auto-columns: minmax(0, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width:768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`}; */
  /* } */
`;

export const OpColumn1 = styled.div`

  margin-bottom: 15px;
  padding: 0 15px;
  /* grid-area: col1; */
`;

export const OpColumn2 = styled.div`

  margin-bottom: 15px;

  padding: 0 15px;
  grid-area: col2;
`;

export const OpTextWrapper = styled.div`
  max-width: auto;
  padding-top: 70px;
  padding-bottom: 30px;
  
`;

export const OpTopLine = styled.p`
/* padding: 0 24px; */
  margin-top:40px;
  color: #316B83;
  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  /* padding: 0 15px; */
 
`;

export const OpHeading = styled.h1`
  padding-top:40px;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #6D8299;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const VideoBg = styled.video`
padding-right: 0;

height:100%;
  /* border: 0; */
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 100%;
  padding-bottom:30px;
`;

export const OpSubtitle = styled.p`
  /* max-width: 440px; */
  max-width:100%;
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 20px;
  color: #010606;

  @media screen and (max-width: 700px) {
    max-width: 440px;
    font-size: 20px;
  }
`;



export const OpImgWrap = styled.div`

  max-width: 555px;
  height: 80%;

 
`;


