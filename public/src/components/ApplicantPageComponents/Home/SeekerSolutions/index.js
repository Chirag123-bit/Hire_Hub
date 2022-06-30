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

import axios from "axios";
import { useEffect, useState } from "react";
import { getCategories, host } from "../../../../utils/APIRoutes";
import "../../../style.css";

function SeekerSolutions() {
  const [categories, setCategories] = useState([]);
  const [ready, setIsReady] = useState(false);
  // useEffect(() => {
  //   import("./glass");
  // });
  useEffect(() => {
    axios.get(getCategories).then((result) => {
      setCategories(result.data.data);
      setIsReady(true);
    });
  }, []);
  return (
    <SolutionsContainer>
      <TextContent>
        <Slogan>
          One Platform <br /> Many <ColoredSlogan>Solutions</ColoredSlogan>
        </Slogan>
      </TextContent>
      <CardsContainer>
        {!ready ? (
          <div style={{ margin: "auto" }}>
            <div className="loading-wrapper">
              <div className="loader">
                <div className="loading-circle">s</div>
              </div>
            </div>
          </div>
        ) : (
          categories.slice(0, 6).map(
            (category) => (
              <div
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.3"
                className="cardTest"
                id={uuid()}
                style={{ marginBottom: "1rem" }}
              >
                <img
                  src={host + "/" + category.category.image}
                  class="proImg"
                  alt="srh"
                />

                <h2 class="name">{category.category.title}</h2>
                <p>{category.jobs} Jobs Available</p>
                <button>Explore Now</button>
              </div>
            ),
            import("./glass")
          )
        )}
      </CardsContainer>
    </SolutionsContainer>
  );
}

export default SeekerSolutions;
