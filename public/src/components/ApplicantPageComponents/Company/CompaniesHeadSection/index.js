import {
  ContentHolder,
  HeadSectionContainer,
  HeadSubtitle,
  HeadTitle,
} from "../../CategoryLoadSection/CategoryElements";
import {
  ColoredSlogan,
  Slogan,
  SloganSubtext,
} from "../../Home/SeekerHero/seekerHeroElements";
import "../../Home/SeekerHero/style.css";
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
          <SloganSubtext style={{ color: "white" }}>
            Find the companies best suited to your intrests. Anything from
            Real-Estate to Health, Technology to Social Work
          </SloganSubtext>
        </HeadSubtitle>
      </ContentHolder>
    </HeadSectionContainer>
  );
}

export default CompanyHeadSection;
