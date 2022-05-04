import React, { useState } from "react";
import Video from "../../../videos/Video.mp4";
import {
  HeroBg,
  HeroContainer,
  VideoBg,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";
import { Button } from "../../ButtonElement";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => setHover(!hover);

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hiring Process Just Got Easier!</HeroH1>
        <HeroP>
          Sign Up for a free account and start the process right away!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="/applicant/home"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
