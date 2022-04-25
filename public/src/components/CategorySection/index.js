import React from "react";
import { ColoredSlogan } from "../SeekerHero/seekerHeroElements";
import {
  CategoryContainer,
  Title,
  TitleContainer,
  CatImage,
  CategoryCard,
  CategorySubtitle,
  CategoryTitle,
  HContainer,
  ImageSection,
  SubTitleSection,
  TitleSection,
  ContentHolder,
} from "./CategoryElements";

import backend from "../../images/backend.png";

function Categories({ Sector, Job_Title, no_of_jobs, white }) {
  return (
    <CategoryContainer white={white}>
      <ContentHolder>
        <TitleContainer>
          <Title>
            Jobs in <ColoredSlogan>{Sector}</ColoredSlogan>
          </Title>
        </TitleContainer>
        <HContainer>
          <CategoryCard white={white}>
            <ImageSection>
              <CatImage src={backend} alt="Backend" />
            </ImageSection>
            <TitleSection>
              <CategoryTitle>{Job_Title}</CategoryTitle>
            </TitleSection>
            <SubTitleSection>
              <CategorySubtitle>{no_of_jobs} Jobs Available</CategorySubtitle>
            </SubTitleSection>
          </CategoryCard>
          <CategoryCard white={white}>
            <ImageSection>
              <CatImage src={backend} alt="Backend" />
            </ImageSection>
            <TitleSection>
              <CategoryTitle>{Job_Title}</CategoryTitle>
            </TitleSection>
            <SubTitleSection>
              <CategorySubtitle>{no_of_jobs} Jobs Available</CategorySubtitle>
            </SubTitleSection>
          </CategoryCard>
          <CategoryCard white={white}>
            <ImageSection>
              <CatImage src={backend} alt="Backend" />
            </ImageSection>
            <TitleSection>
              <CategoryTitle>{Job_Title}</CategoryTitle>
            </TitleSection>
            <SubTitleSection>
              <CategorySubtitle>{no_of_jobs} Jobs Available</CategorySubtitle>
            </SubTitleSection>
          </CategoryCard>
        </HContainer>
      </ContentHolder>
    </CategoryContainer>
  );
}

export default Categories;
