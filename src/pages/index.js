import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import NavBar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />

      <NavBar toggle={toggle} />
      <HeroSection />
    </>
  );
};

export default Home;
