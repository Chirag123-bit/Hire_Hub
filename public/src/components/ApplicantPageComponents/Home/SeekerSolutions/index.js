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

import { Center } from "@chakra-ui/react";
import Tilt from "react-tilt";
import { v4 as uuid } from "uuid";

function SeekerSolutions() {
  const [categories, setCategories] = useState([]);
  const [ready, setIsReady] = useState(false);

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
              <Tilt
                className="cardTest"
                id={uuid()}
                style={{ marginBottom: "1rem" }}
                options={{
                  scale: 1,
                  speed: 500,
                  reverse: true,
                  max: 30,
                  glare: true,
                  maxGlare: 1,
                  easing: "cubic-bezier(.03,.98,.52,.99)",
                  prespective: 500,
                }}
              >
                <Center>
                  <div className="crdImg">
                    <Center>
                      <img
                        src={host + "/" + category.category.image}
                        class="proImg"
                        alt="srh"
                      />
                    </Center>
                  </div>
                </Center>

                <h2 class="name">{category.category.title}</h2>
                <p>{category.jobs} Jobs Available</p>
                <button>Explore Now</button>
              </Tilt>
            ),
            import("./glass")
          )
        )}
      </CardsContainer>
    </SolutionsContainer>
  );
}

export default SeekerSolutions;

// <div
//   data-tilt
//   data-tilt-glare
//   data-tilt-max-glare="0.3"
//   className="cardTest"
//   id={uuid()}
//   style={{ marginBottom: "1rem" }}
// >
//   <img src={host + "/" + category.category.image} class="proImg" alt="srh" />

//   <h2 class="name">{category.category.title}</h2>
//   <p>{category.jobs} Jobs Available</p>
//   <button>Explore Now</button>
// </div>;
