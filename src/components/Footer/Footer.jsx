import React from "react";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiTwotonePhone } from "react-icons/ai";
import logo from "../../images/Logo_Fonciere_Truffaut.png";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLogo,
  FooterAddy,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle> Categories</FooterLinkTitle>
                <FooterLink to="/Operations">Opérations</FooterLink>
                <FooterLink to="/">A propos</FooterLink>
                <FooterLink to="/Contact">Contact</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle> Addresse</FooterLinkTitle>
                <FooterAddy> <GoLocation /> 17 rue Truffaud, 75017, Paris, France </FooterAddy>
                <FooterAddy> <AiTwotonePhone /> 06 XX XX XX XX </FooterAddy>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrapper>
              <SocialLogo to="/">
                {" "}
                <FooterLogo src={logo} alt="wassup" />
              </SocialLogo>

              <WebsiteRights>
                Wassup Haters © {new Date().getFullYear()} All RIGHTS RESERVED
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="//www.facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.instagram.com"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.youtube.com"
                  target="_blank"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink
                  href="//www.twitter.com"
                  target="_blank"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrapper>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
