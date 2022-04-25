import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import SeekerCategory from "../components/SeekerCategory";
import SeekerNav from "../components/SeekerNav";
import Sidebar from "../components/Sidebar";
import ApplicantHome from "../components/SeekerHome";

export default function Seeker() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SeekerNav toggle={toggle} />

      <Routes>
        <Route path="/home" element={<ApplicantHome id="home" />} />
        <Route path="/category" element={<SeekerCategory />} />
      </Routes>

      <Footer />
    </>
  );
}
