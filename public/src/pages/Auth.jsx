import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "../components/Common/Footer";
import RegistrationForm from "../components/Common/Auth/Register/RegistrationForm";
import AuthNavbar from "../components/Common/Auth/Navbar";

export default function Auth() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigation = useNavigate();
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <AuthNavbar toggle={toggle} />

      <Routes>
        <Route
          path="/register"
          element={<RegistrationForm navigation={navigation} />}
        />
      </Routes>

      <Footer />
    </>
  );
}
