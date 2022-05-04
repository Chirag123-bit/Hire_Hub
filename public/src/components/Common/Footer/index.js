import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it Works? </FooterLink>
              <FooterLink to="/signin">Testimonals </FooterLink>
              <FooterLink to="/signin"> Careers </FooterLink>
              <FooterLink to="/signin">Investors </FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it Works? </FooterLink>
              <FooterLink to="/signin">Testimonals </FooterLink>
              <FooterLink to="/signin"> Careers </FooterLink>
              <FooterLink to="/signin">Investors </FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it Works? </FooterLink>
              <FooterLink to="/signin">Testimonals </FooterLink>
              <FooterLink to="/signin"> Careers </FooterLink>
              <FooterLink to="/signin">Investors </FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it Works? </FooterLink>
              <FooterLink to="/signin">Testimonals </FooterLink>
              <FooterLink to="/signin"> Careers </FooterLink>
              <FooterLink to="/signin">Investors </FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              HireHub
            </SocialLogo>
            <WebsiteRights>
              Chirag Simkhada &copy; {new Date().getFullYear()} All Rights
              Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/Chirag123-bit"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/Chirag123-bit"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/Chirag123-bit"
                target="_blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/Chirag123-bit"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/chirag-s-74324a1a6/"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
