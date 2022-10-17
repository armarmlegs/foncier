import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
box-sizing:border-box;
  background-color: #8ca1a5;

  /* width: 100%; */

  /* position:relative; */
  position:fixed;
  bottom: 0;
  width:100%;
  max-height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;

  @media screen and (max-width: 750px) {
    height: 100px;
  }
`;

export const FooterWrapper = styled.div`
  box-sizing:border-box;
  width: 100%;
 
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
 
  margin: 0;
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 60px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #000;

  @media screen and (max-width: 600px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 11px;
`;

export const FooterLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  &:hover {
    color: #fff;
    transition: 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.section`

  /* max-width: 1300px; */
  width: 100%;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* max-width:1100px; */
  margin: 40 auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: row;
  }
`;

export const SocialLogo = styled(Link)`
  color: #000;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 0px;
  font-weight: bold;

  &:hover {
    color: #fff;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 760px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
  }
`;

export const WebsiteRights = styled.small`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
  padding-left: 20px;
  text-align: center;
  width: 100%;
  

  @media screen and (max-width: 860px) {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
  }

  @media screen and (max-width: 650px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 9px;
    width: 150px;
    margin-right: 30px;
    margin-bottom:0px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 140px;

  @media screen and (max-width: 650px) {
 width: 50%;
  }
`;

export const SocialIconLink = styled.a`
  color: #000;
  font-size: 20px;

  &:hover {
    color: #fff;
    transition: 0.3s ease-in-out;
  }
`;

export const FooterLogo = styled.img`
  margin-left: 0;
  width: 140px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: 860px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
  }
`;

export const FooterAddy = styled.address`
  color: #000;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  width: 300px;
`;
