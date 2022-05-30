import React from "react";
import { useSpring } from "react-spring";
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

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function SeekerSolutions() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));
  return (
    <SolutionsContainer>
      <TextContent>
        <Slogan>
          One Platform <br /> Many <ColoredSlogan>Solutions</ColoredSlogan>
        </Slogan>
      </TextContent>
      <CardsContainer>
        <CategoryCard
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <div className="box1">
            <FcAdvertisment />
          </div>
          <div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </div>
        </CategoryCard>
        <CategoryCard
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <div className="box1">
            <FcAdvertisment />
          </div>
          <div className="box2">
            <h6>Marketing and Communication</h6>
            <p>100 Jobs Available</p>
          </div>
        </CategoryCard>
        <CategoryCard
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.interpolate(trans) }}
        >
          <div className="box1">
            <FcAdvertisment />
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
