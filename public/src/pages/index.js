import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Common/Footer";
import HeroSection from "../components/OnboardingPageComponents/HeroSection";
import InfoSection from "../components/OnboardingPageComponents/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/OnboardingPageComponents/InfoSection/Data";
import NavBar from "../components/OnboardingPageComponents/Navbar";
import Services from "../components/OnboardingPageComponents/Services";
import Sidebar from "../components/OnboardingPageComponents/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const [type, setType] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));

    if (userInfo !== null) {
      setHide(true);
      if (userInfo.type === "employer") {
        setType("Company");
      } else {
        setType("Applicant");
      }
    }
  }, []);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <NavBar toggle={toggle} hide={hide} type={type} />
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
