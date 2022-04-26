import React from "react";
import {
  ColoredSlogan,
  Slogan,
  SloganSubtext,
} from "../SeekerHero/seekerHeroElements";
import {
  HeadSectionContainer,
  ContentHolder,
  HeadSubtitle,
  HeadTitle,
} from "../CategoryLoadSection/CategoryElements";
import "../SeekerHero/style.css";
import ParticleBackground from "./ParticleBackground";

function CompanyHeadSection() {
  return (
    <HeadSectionContainer>
      <ParticleBackground />
      <ContentHolder>
        <HeadTitle>
          <Slogan>
            Explore the Selection of <ColoredSlogan>Conglomerate</ColoredSlogan>
            <br /> Here at <ColoredSlogan>Hire Hub</ColoredSlogan>
          </Slogan>
        </HeadTitle>
        <HeadSubtitle>
          <SloganSubtext>
            Find the companies best suited to your intrests. Anything from
            Real-Estate to Health, Technology to Social Work
          </SloganSubtext>
        </HeadSubtitle>
      </ContentHolder>
    </HeadSectionContainer>
  );
}

export default CompanyHeadSection;
