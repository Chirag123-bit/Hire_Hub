import axios from "axios";
import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { v4 as uuid } from "uuid";
import { getCategories, host } from "../../../../utils/APIRoutes";
import { CardsContainer } from "../SeekerSolutions/SolutionComponents";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [ready, setIsReady] = useState(false);

  useEffect(() => {
    axios.get(getCategories).then((result) => {
      setCategories(result.data.data);
      setIsReady(true);
    });
  }, []);

  return (
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
        categories.map((category) => (
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
            <img
              src={host + "/" + category.category.image}
              class="proImg"
              alt="srh"
            />

            <h2 class="name">{category.category.title}</h2>
            <p>{category.jobs} Jobs Available</p>
            <button>Explore Now</button>
          </Tilt>
        ))
      )}
    </CardsContainer>
  );
}

export default Categories;
