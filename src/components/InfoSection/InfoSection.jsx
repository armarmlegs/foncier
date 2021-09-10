import React from 'react'
import {Button} from '../Button'



import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, VideoBg, ButtonWraps} from './InfoSectionElements'
import { Container } from '../../globalStyles'

const InfoSection = ({lightBg,buttonTo ,imgStart, lightTopLine, lightTextDesc, topLine, lightText,headLine, description, buttonLabel, img, alt, start, video}) => {
    return (
        <>
          <Container>
        <InfoSec lightBg={lightBg} id="operations">
          
                <InfoRow imgStart={imgStart}>
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
                <VideoBg autoPlay muted loop src={video} />
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
