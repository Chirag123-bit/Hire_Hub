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
} from "../CategorySection/CategoryElements";

import google from "../../images/google.png";
// import brook from "../../images/brook.png";
// import cleveland from "../../images/cleveland.png";

function Categories({ Sector, Company_Name, no_of_jobs, white }) {
  return (
    <CategoryContainer white={white}>
      <ContentHolder>
        <TitleContainer>
          <Title>
            Companies Focused in <ColoredSlogan>{Sector}</ColoredSlogan>
          </Title>
        </TitleContainer>
        <HContainer>
          <CategoryCard white={white}>
            <ImageSection>
              <CatImage src={google} alt="Backend" />
            </ImageSection>
            <TitleSection>
              <CategoryTitle style={{ "font-size": "20px" }}>
                {Company_Name}
              </CategoryTitle>
            </TitleSection>
            <SubTitleSection>
              <CategorySubtitle>{no_of_jobs} Jobs Available</CategorySubtitle>
            </SubTitleSection>
          </CategoryCard>
          <CategoryCard white={white}>
            <ImageSection>
              <CatImage src={google} alt="Backend" />
            </ImageSection>
            <TitleSection>
              <CategoryTitle style={{ "font-size": "20px" }}>
                {Company_Name}
              </CategoryTitle>
            </TitleSection>
            <SubTitleSection>
              <CategorySubtitle>{no_of_jobs} Jobs Available</CategorySubtitle>
            </SubTitleSection>
          </CategoryCard>
          <CategoryCard white={white}>
            <ImageSection>
              <CatImage src={google} alt="Backend" />
            </ImageSection>
            <TitleSection>
              <CategoryTitle style={{ "font-size": "20px" }}>
                {Company_Name}
              </CategoryTitle>
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
