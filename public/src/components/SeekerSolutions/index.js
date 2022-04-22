import React from "react";
import {
  SolutionsContainer,
  CardsContainer,
  CategoryCard,
} from "./SolutionComponents";
import {
  ColoredSlogan,
  Slogan,
  TextContent,
} from "../SeekerHero/seekerHeroElements";
import marketing from "../../images/marketing.svg";
function SeekerSolutions() {
  return (
    <SolutionsContainer>
      <TextContent>
        <Slogan>
          One Platform <br /> Many <ColoredSlogan>Solutions</ColoredSlogan>
        </Slogan>
      </TextContent>
      <CardsContainer>
        <CategoryCard>
          <div className="box1">
            <img src={marketing} alt="marketing" />
          </div>
          <div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <img src={marketing} alt="marketing" />
          </div>
          <div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <img src={marketing} alt="marketing" />
          </div>
          <div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <img src={marketing} alt="marketing" />
          </div>
          <div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <img src={marketing} alt="marketing" />
          </div>
          <div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <img src={marketing} alt="marketing" />
          </div>
          <div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <img src={marketing} alt="marketing" />
          </div>
          <div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </div>
        </CategoryCard>
        <CategoryCard>
          <div className="box1">
            <img src={marketing} alt="marketing" />
          </div>
          <div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </div>
        </CategoryCard>
      </CardsContainer>
    </SolutionsContainer>
  );
}

export default SeekerSolutions;
