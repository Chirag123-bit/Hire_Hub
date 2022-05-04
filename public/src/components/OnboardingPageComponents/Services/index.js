import React from "react";
import Icon1 from "../../../images/svg-4.svg";
import Icon2 from "../../../images/svg-5.svg";
import Icon3 from "../../../images/svg-6.svg";
import {
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServiceElements";
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            Break out from the cycle of tedious hiring process. Join now and
            experince flexibliltiy in the process!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Real Time Communication</ServicesH2>
          <ServicesP>
            Shortlist the candidates and interview them on the spot. It's that
            easy!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Top Talents</ServicesH2>
          <ServicesP>
            Discover Top talents around the world and boost your company's
            workforce!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
