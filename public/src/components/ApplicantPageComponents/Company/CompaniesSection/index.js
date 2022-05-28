import axios from "axios";
import React, { useEffect, useState } from "react";
import { getSectorCompany } from "../../../../utils/APIRoutes";
import {
  CategoryCard,
  CategoryContainer,
  CategoryTitle,
  CatImage,
  ContentHolder,
  HContainer,
  ImageSection,
  Title,
  TitleContainer,
  TitleSection,
} from "../../Home/CategorySection/CategoryElements";
import { ColoredSlogan } from "../../Home/SeekerHero/seekerHeroElements";

function Categories({ white }) {
  var [isTechReady, setIsTechReady] = useState(false);
  var [tech, setTech] = useState([]);
  var [isHealthReady, setIsHealthReady] = useState(false);
  var [health, setHealth] = useState([]);
  var [isEntReady, setIsEntReady] = useState(false);
  var [ent, setEnt] = useState([]);
  var [isRealReady, setIsRealReady] = useState(false);
  var [real, setReal] = useState([]);
  useEffect(() => {
    axios
      .get(getSectorCompany, {
        params: {
          sector: "Information Technology",
        },
      })
      .then((result) => {
        tech = result.data.data.slice(0, 3);
        setTech(tech);
        setIsTechReady(true);
        console.log(tech);
      });

    axios
      .get(getSectorCompany, {
        params: {
          sector: "Health",
        },
      })
      .then((result) => {
        health = result.data.data.slice(0, 3);
        setHealth(health);
        setIsHealthReady(true);
        console.log(tech);
      });

    axios
      .get(getSectorCompany, {
        params: {
          sector: "Entertainment",
        },
      })
      .then((result) => {
        ent = result.data.data.slice(0, 3);
        setEnt(ent);
        setIsEntReady(true);
        console.log(ent);
      });
    axios
      .get(getSectorCompany, {
        params: {
          sector: "Real Estate",
        },
      })
      .then((result) => {
        real = result.data.data.slice(0, 3);
        setReal(real);
        setIsRealReady(true);
      });
  }, []);
  return (
    <CategoryContainer white={white}>
      <ContentHolder>
        <TitleContainer>
          <Title>
            Companies Focused in <ColoredSlogan>Technology</ColoredSlogan>
          </Title>
        </TitleContainer>
        <HContainer>
          {isTechReady ? (
            tech.map((company) => (
              <CategoryCard
                white={white}
                onClick={(event) =>
                  (window.location.href = `/applicant/company/${company._id}`)
                }
              >
                <ImageSection>
                  <CatImage src={company.avatarImage} alt="Backend" />
                </ImageSection>
                <TitleSection>
                  <CategoryTitle style={{ "font-size": "20px" }}>
                    {company.name}
                  </CategoryTitle>
                </TitleSection>
              </CategoryCard>
            ))
          ) : (
            <div></div>
          )}
        </HContainer>
      </ContentHolder>
      <ContentHolder>
        <TitleContainer>
          <Title>
            Companies Focused in <ColoredSlogan>Health Care</ColoredSlogan>
          </Title>
        </TitleContainer>
        <HContainer>
          {isHealthReady ? (
            health.map((company) => (
              <CategoryCard
                white={white}
                onClick={(event) =>
                  (window.location.href = `/applicant/company/${company._id}`)
                }
              >
                <ImageSection>
                  <CatImage src={company.avatarImage} alt="Backend" />
                </ImageSection>
                <TitleSection>
                  <CategoryTitle style={{ "font-size": "20px" }}>
                    {company.name}
                  </CategoryTitle>
                </TitleSection>
              </CategoryCard>
            ))
          ) : (
            <div></div>
          )}
        </HContainer>
      </ContentHolder>
      <ContentHolder>
        <TitleContainer>
          <Title>
            Companies Focused in{" "}
            <ColoredSlogan>Entertainment Industry</ColoredSlogan>
          </Title>
        </TitleContainer>
        <HContainer>
          {isEntReady ? (
            ent.map((company) => (
              <CategoryCard
                white={white}
                onClick={(event) =>
                  (window.location.href = `/applicant/company/${company._id}`)
                }
              >
                <ImageSection>
                  <CatImage src={company.avatarImage} alt="Backend" />
                </ImageSection>
                <TitleSection>
                  <CategoryTitle style={{ "font-size": "20px" }}>
                    {company.name}
                  </CategoryTitle>
                </TitleSection>
              </CategoryCard>
            ))
          ) : (
            <div></div>
          )}
        </HContainer>
      </ContentHolder>
      <ContentHolder>
        <TitleContainer>
          <Title>
            Companies Focused in <ColoredSlogan>Real Estates</ColoredSlogan>
          </Title>
        </TitleContainer>
        <HContainer style={{ marginBottom: "2rem" }}>
          {isRealReady ? (
            real.map((company) => (
              <CategoryCard
                white={white}
                onClick={(event) =>
                  (window.location.href = `/applicant/company/${company._id}`)
                }
              >
                <ImageSection>
                  <CatImage src={company.avatarImage} alt="Backend" />
                </ImageSection>
                <TitleSection>
                  <CategoryTitle style={{ "font-size": "20px" }}>
                    {company.name}
                  </CategoryTitle>
                </TitleSection>
              </CategoryCard>
            ))
          ) : (
            <div></div>
          )}
        </HContainer>
      </ContentHolder>
    </CategoryContainer>
  );
}

export default Categories;
