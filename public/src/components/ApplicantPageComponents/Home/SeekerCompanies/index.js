import React from "react";
import {
  SolutionsContainer,
  CardsContainer,
  CategoryCard,
  FcAdvertisment,
} from "./ComapnyElements";
import {
  ColoredSlogan,
  Slogan,
  TextContent,
} from "../SeekerHero/seekerHeroElements";

function Companies() {
  return (
    <SolutionsContainer>
      <TextContent>
        <Slogan>
          Platform For All! <br /> Check Our
          <ColoredSlogan> Affilated Companies</ColoredSlogan>
        </Slogan>
      </TextContent>
      <CardsContainer>
        <CategoryCard>
          <div className="box1">
            <FcAdvertisment />
          </div>
          <div className="box2">
            <h6>Google Inc.</h6>
            <p>Silicon Valley, California</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <FcAdvertisment />
          </div>
          <div className="box2">
            <h6>Google Inc.</h6>
            <p>Silicon Valley, California</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <FcAdvertisment />
          </div>
          <div className="box2">
            <h6>Google Inc.</h6>
            <p>Silicon Valley, California</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <FcAdvertisment />
          </div>
          <div className="box2">
            <h6>Google Inc.</h6>
            <p>Silicon Valley, California</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <FcAdvertisment />
          </div>
          <div className="box2">
            <h6>Google Inc.</h6>
            <p>Silicon Valley, California</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <FcAdvertisment />
          </div>
          <div className="box2">
            <h6>Google Inc.</h6>
            <p>Silicon Valley, California</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <FcAdvertisment />
          </div>
          <div className="box2">
            <h6>Google Inc.</h6>
            <p>Silicon Valley, California</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <FcAdvertisment />
          </div>
          <div className="box2">
            <h6>Google Inc.</h6>
            <p>Silicon Valley, California</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <FcAdvertisment />
          </div>
          <div className="box2">
            <h6>Google Inc.</h6>
            <p>Silicon Valley, California</p>
          </div>
        </CategoryCard>
      </CardsContainer>
    </SolutionsContainer>
  );
}

export default Companies;
