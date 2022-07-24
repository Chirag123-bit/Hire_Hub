import React from "react";
import Video from "../../../../videos/background.mp4";
import {
  ColoredSlogan,
  ContentHolder,
  FormContainer,
  HeroBg,
  HeroContainer,
  JobSearch,
  LocationFilter,
  SearchBtn,
  SearchContainer,
  Slogan,
  SloganSubtext,
  TextContent,
  VideoBg,
} from "./seekerHeroElements";
import "./style.css";

function SeekerHero() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      {/* <ParticleBackground /> */}
      <ContentHolder>
        <TextContent>
          <Slogan>
            Get The <ColoredSlogan>Right Job</ColoredSlogan> {"\n"} You Deserve
          </Slogan>
          <SloganSubtext style={{ color: "white" }}>
            100,000 jobs listed here! Your dream Job is Waiting
          </SloganSubtext>
        </TextContent>
        <FormContainer>
          <SearchContainer>
            <JobSearch placeholder="Job title or keyword" type="text" />
            <LocationFilter>
              <option value="Place 1">Place One</option>
              <option value="Place 2">Place Two</option>
              <option value="Place 3">Place Three</option>
            </LocationFilter>
            <SearchBtn>Search</SearchBtn>
          </SearchContainer>
        </FormContainer>
      </ContentHolder>
    </HeroContainer>
  );
}

export default SeekerHero;
