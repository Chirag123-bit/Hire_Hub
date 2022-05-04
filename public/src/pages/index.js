import React, { useState } from "react";
import Sidebar from "../components/OnboardingPageComponents/Sidebar";
import NavBar from "../components/OnboardingPageComponents/Navbar";
import HeroSection from "../components/OnboardingPageComponents/HeroSection";
import InfoSection from "../components/OnboardingPageComponents/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/OnboardingPageComponents/InfoSection/Data";
import Services from "../components/OnboardingPageComponents/Services";
import Footer from "../components/Common/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
