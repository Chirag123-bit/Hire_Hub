import React from "react";
import "./style.css";
import ParticleBackground from "./ParticleBackground";

import {
  HeroContainer,
  ContentHolder,
  ColoredSlogan,
  Slogan,
  SloganSubtext,
  TextContent,
  JobSearch,
  LocationFilter,
  SearchBtn,
  SearchContainer,
  FormContainer,
} from "./seekerHeroElements";

function SeekerHero() {
  return (
    <HeroContainer>
      <ParticleBackground />
      <ContentHolder>
        <TextContent>
          <Slogan>
            Get The <ColoredSlogan>Right Job</ColoredSlogan> {"\n"} You Deserve
          </Slogan>
          <SloganSubtext>
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
