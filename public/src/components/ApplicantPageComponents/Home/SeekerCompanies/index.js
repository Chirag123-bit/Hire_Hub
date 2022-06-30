import axios from "axios";
import { useEffect, useState } from "react";
import { useSpring } from "react-spring";
import { v4 as uuid } from "uuid";
import { getAllCompanies } from "../../../../utils/APIRoutes";
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
} from "./ComapnyElements";

function Companies() {
  var [ready, setIsReady] = useState(false);
  var [companies, setCompanies] = useState([]);
  useEffect(() => {
    axios.get(getAllCompanies).then((result) => {
      companies = result.data.data.slice(0, 9);
      setCompanies(companies);
      setIsReady(true);
      console.log(companies);
    });
  }, []);

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));

  return (
    <SolutionsContainer>
      <TextContent>
        <Slogan>
          Platform For All! <br /> Check Our
          <ColoredSlogan> Affilated Companies</ColoredSlogan>
        </Slogan>
      </TextContent>
      <CardsContainer>
        {ready ? (
          companies.map((company) => (
            <CategoryCard id={uuid()}>
              <div className="box1" id={uuid()}>
                <FcAdvertisment />
              </div>
              <div className="box2" id={uuid()}>
                <h6>{company.name}</h6>
                <p>
                  {company.region}, {company.country}
                </p>
              </div>
            </CategoryCard>
          ))
        ) : (
          <div></div>
        )}
      </CardsContainer>
    </SolutionsContainer>
  );
}

export default Companies;
