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
} from "./CategoryElements";
// import ParticleBackground from "./ParticleBackground";
import "../SeekerHero/style.css";

function CategoryDescription() {
  return (
    <HeadSectionContainer>
      {/* <ParticleBackground /> */}

      <ContentHolder>
        <HeadTitle>
          <Slogan>
            Explore the vast trove of <ColoredSlogan>Selections</ColoredSlogan>
            <br /> Here at <ColoredSlogan>Hire Hub</ColoredSlogan>
          </Slogan>
        </HeadTitle>
        <HeadSubtitle>
          <SloganSubtext>
            Find the job of best suited to your intrests. Anything from
            Real-Estate to Health, Technology to Social Work
          </SloganSubtext>
        </HeadSubtitle>
      </ContentHolder>
    </HeadSectionContainer>
  );
}

export default CategoryDescription;
