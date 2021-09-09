import React from 'react'
import {Button} from '../Button'
import { Link } from 'react-router-dom';
// import Video from '../../Images/Videos/Video Fonciere/Fonciere Signature.mp4'

import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img, VideoBg} from './InfoSectionElements'
import { Container } from '../../globalStyles'

const InfoSection = ({lightBg, imgStart, lightTopLine, lightTextDesc, topLine, lightText,headLine, description, buttonLabel, img, alt, start, video}) => {
    return (
        <>
        <InfoSec lightBg={lightBg} id="operations">
            <Container>
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
                <Link >
                            <Button to="/Operations"  duration={500}
                  // spy={"true"}
                  exact="true"
                  offset={-20}>{buttonLabel}</Button>
                        </Link>

            </Container>
            
        </InfoSec>
            
        </>
    )
}

export default InfoSection
