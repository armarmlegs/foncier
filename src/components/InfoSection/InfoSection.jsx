import React from 'react'
import {Button} from '../Button'



import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, ButtonWraps} from './InfoSectionElements'
import { Container } from '../../globalStyles'

const InfoSection = ({lightBg,buttonTo , lightTopLine, lightTextDesc, topLine, lightText,headLine, description, buttonLabel, img, alt, start, video}) => {
    return (
        <>
          <Container>
        <InfoSec lightBg={lightBg} id="operations">
          
                <InfoRow >
                <InfoColumn>
                    <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        

                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                <ImgWrapper start={start}>
                <Img src={img} alt={alt}/>
                
                </ImgWrapper>
                </InfoColumn>
                </InfoRow>
                <ButtonWraps >
                            <Button to={buttonTo}  
                  // spy={"true"}
                  exact="true"
                  offset={-20}>{buttonLabel}</Button>
                        </ButtonWraps>

           
            
        </InfoSec>
        </Container>
            
        </>
    )
}

export default InfoSection
