import React from "react";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoplay loop muted src={video} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
