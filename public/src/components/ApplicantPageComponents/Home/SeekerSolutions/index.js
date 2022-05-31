import React from "react";
import { animated } from "react-spring";
import { v4 as uuid } from "uuid";
import {
  ColoredSlogan,
  Slogan,
  TextContent,
} from "../SeekerHero/seekerHeroElements";
import {
  CardsContainer,
  CategoryCard,
  FcAdvertisment,
  SolutionsContainer,
} from "./SolutionComponents";

function SeekerSolutions() {
  return (
    <SolutionsContainer>
      <TextContent>
        <Slogan>
          One Platform <br /> Many <ColoredSlogan>Solutions</ColoredSlogan>
        </Slogan>
      </TextContent>
      <CardsContainer>
        <CategoryCard id={uuid()}>
          <animated.div className="box1">
            <FcAdvertisment />
          </animated.div>
          <animated.div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </animated.div>
        </CategoryCard>
        <CategoryCard id={uuid()}>
          <animated.div className="box1">
            <FcAdvertisment />
          </animated.div>
          <animated.div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </animated.div>
        </CategoryCard>
        <CategoryCard id={uuid()}>
          <animated.div className="box1">
            <FcAdvertisment />
          </animated.div>
          <animated.div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </animated.div>
        </CategoryCard>
        <CategoryCard id={uuid()}>
          <animated.div className="box1">
            <FcAdvertisment />
          </animated.div>
          <animated.div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </animated.div>
        </CategoryCard>
        <CategoryCard id={uuid()}>
          <animated.div className="box1">
            <FcAdvertisment />
          </animated.div>
          <animated.div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </animated.div>
        </CategoryCard>
        <CategoryCard id={uuid()}>
          <animated.div className="box1">
            <FcAdvertisment />
          </animated.div>
          <animated.div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </animated.div>
        </CategoryCard>
      </CardsContainer>
    </SolutionsContainer>
  );
}

export default SeekerSolutions;
