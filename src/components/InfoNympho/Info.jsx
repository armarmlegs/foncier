import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements'
import {Button} from "../Button"



const Info = ({ImgStart, topLine, headLine, description, img, buttonLink, buttonLabel, id, alt}) => {
    return (
        <>
        <InfoContainer  id={id}>
        <InfoWrapper>
          <InfoRow ImgStart = {ImgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading >{headLine}</Heading>
                <Subtitle >{description}</Subtitle>
                <BtnWrap>
                  <Button to={buttonLink}>{buttonLabel}</Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
              <Img src={img} alt={alt} />
              </ImgWrap>
             </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
    )
}

export default Info
