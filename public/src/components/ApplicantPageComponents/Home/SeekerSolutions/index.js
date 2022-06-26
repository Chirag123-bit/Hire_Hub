// import {
//   ColoredSlogan,
//   Slogan,
//   TextContent,
// } from "../SeekerHero/seekerHeroElements";
// import { CardsContainer, SolutionsContainer } from "./SolutionComponents";

// import { useEffect } from "react";
// import women from "../../../../images/woman.jpg";
// import "../../../style.css";

import { v4 as uuid } from "uuid";
import {
  ColoredSlogan,
  Slogan,
  TextContent,
} from "../SeekerHero/seekerHeroElements";
import { CardsContainer, SolutionsContainer } from "./SolutionComponents";

import { useEffect } from "react";
import entertainment from "../../../../images/health.png";
import "../../../style.css";

function SeekerSolutions() {
  useEffect(() => {
    import("./glass");
  });
  return (
    <SolutionsContainer>
      <TextContent>
        <Slogan>
          One Platform <br /> Many <ColoredSlogan>Solutions</ColoredSlogan>
        </Slogan>
      </TextContent>
      <CardsContainer>
        <div
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="0.3"
          class="cardTest"
          id={uuid()}
        >
          <img src={entertainment} class="proImg" alt="srh" />

          <h2 class="name">Marketing and Communication</h2>
          <p>100 Jobs Available</p>
          <button>Explore Now</button>
        </div>
        <div
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="0.3"
          class="cardTest"
          id={uuid()}
        >
          <img src={entertainment} class="proImg" alt="srh" />

          <h2 class="name">Marketing and Communication</h2>
          <p>100 Jobs Available</p>
          <button>Explore Now</button>
        </div>
        <div
          data-tilt
          data-tilt-glare
          data-tilt-max-glare="0.3"
          class="cardTest"
          id={uuid()}
        >
          <img src={entertainment} class="proImg" alt="srh" />

          <h2 class="name">Marketing and Communication</h2>
          <p>100 Jobs Available</p>
          <button>Explore Now</button>
        </div>
      </CardsContainer>
    </SolutionsContainer>
  );
}

export default SeekerSolutions;
