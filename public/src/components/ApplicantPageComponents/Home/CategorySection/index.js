import axios from "axios";
import React, { useEffect, useState } from "react";
import backend from "../../../../images/backend.png";
import { getSectorJob } from "../../../../utils/APIRoutes";
import { ColoredSlogan } from "../SeekerHero/seekerHeroElements";
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
} from "./CategoryElements";

function Categories() {
  var [isTechReady, setIsTechReady] = useState(false);
  var [tech, setTech] = useState([]);
  var [isHealthReady, setIsHealthReady] = useState(false);
  var [health, setHealth] = useState([]);
  var [isEntReady, setIsEntReady] = useState(false);
  var [ent, setEnt] = useState([]);
  var [isFinanceReady, setIsFinanceReady] = useState(false);
  var [finance, setFinance] = useState([]);
  useEffect(() => {
    axios
      .get(getSectorJob, {
        params: {
          sector: "Information Technology",
        },
      })
      .then((result) => {
        tech = result.data.data.slice(0, 3);
        setTech(tech);
        setIsTechReady(true);
        // console.log(tech);
      });

    axios
      .get(getSectorJob, {
        params: {
          sector: "Finance",
        },
      })
      .then((result) => {
        finance = result.data.data.slice(0, 3);
        setFinance(finance);
        setIsFinanceReady(true);
        // console.log(result.data.data);
      });

    axios
      .get(getSectorJob, {
        params: {
          sector: "Entertainment",
        },
      })
      .then((result) => {
        ent = result.data.data.slice(0, 3);
        setEnt(ent);
        setIsEntReady(true);
        // console.log(ent);
      });
  }, []);
  return (
    <CategoryContainer>
      <ContentHolder>
        <TitleContainer>
          <Title>
            Jobs in <ColoredSlogan>Information Technology</ColoredSlogan>
          </Title>
        </TitleContainer>

        <HContainer>
          {isTechReady ? (
            tech.map((job) => (
              <CategoryCard>
                <ImageSection>
                  <CatImage src={backend} alt="Backend" />
                </ImageSection>
                <TitleSection>
                  <CategoryTitle>{job.title}</CategoryTitle>
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
            Jobs in <ColoredSlogan>Financial Services</ColoredSlogan>
          </Title>
        </TitleContainer>

        <HContainer>
          {isFinanceReady ? (
            finance.map((job) => (
              <CategoryCard>
                <ImageSection>
                  <CatImage src={backend} alt="Backend" />
                </ImageSection>
                <TitleSection>
                  <CategoryTitle>{job.title}</CategoryTitle>
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
            Jobs in <ColoredSlogan>Entertainment</ColoredSlogan>
          </Title>
        </TitleContainer>

        <HContainer>
          {isEntReady ? (
            ent.map((job) => (
              <CategoryCard>
                <ImageSection>
                  <CatImage src={backend} alt="Backend" />
                </ImageSection>
                <TitleSection>
                  <CategoryTitle>{job.title}</CategoryTitle>
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
            Jobs in <ColoredSlogan>Health Sector</ColoredSlogan>
          </Title>
        </TitleContainer>

        <HContainer>
          {isHealthReady ? (
            health.map((job) => (
              <CategoryCard>
                <ImageSection>
                  <CatImage src={backend} alt="Backend" />
                </ImageSection>
                <TitleSection>
                  <CategoryTitle>{job.title}</CategoryTitle>
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
