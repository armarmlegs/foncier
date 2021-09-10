import styled from "styled-components";



export const OpContainer = styled.div`
  color: #fff;
  background: #f9F9F9;

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
  padding-top: 0;
  padding-bottom: 30px;
`;

export const OpTopLine = styled.p`
  color: #6b705c;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
 
`;

export const OpHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #cb997e;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const OpSubtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #010606;
`;



export const OpImgWrap = styled.div`

  max-width: 555px;
  height: 80%;

 
`;


