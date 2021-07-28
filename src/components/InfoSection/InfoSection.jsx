import React from 'react'
import {Button} from '../Button'
import { Link } from 'react-router-dom'

import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSectionElements'
import { Container } from '../../globalStyles'

const InfoSection = ({lightBg, imgStart, lightTopLine, lightTextDesc, topLine, lightText,headLine, description, buttonLabel, img, alt, start}) => {
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
                        <Link >
                            <Button to="/Operations"  duration={500}
                  // spy={"true"}
                  exact="true"
                  offset={-20}>{buttonLabel}</Button>
                        </Link>

                    </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                <ImgWrapper start={start}>
                <Img src={img} alt={alt}/>
                </ImgWrapper>
                </InfoColumn>
                </InfoRow>


            </Container>
            
        </InfoSec>
            
        </>
    )
}

export default InfoSection
