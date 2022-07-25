import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SeekerNav from "../components/ApplicantPageComponents/Common/SeekerNav";
import Sidebar from "../components/ApplicantPageComponents/Common/Sidebar";
import Careers from "../components/ApplicantPageComponents/Company/CompanyView";
import ApplicantEvents from "../components/ApplicantPageComponents/Events";
import AppliedJobs from "../components/ApplicantPageComponents/Jobs/AppliedJobs";
import SavedJobs from "../components/ApplicantPageComponents/Jobs/SavedJobs";
import SeekerJobs from "../components/ApplicantPageComponents/Jobs/SeekerJobComponent/SeekerJobs";
import ApplicantTodos from "../components/ApplicantPageComponents/Todo";
import Footer from "../components/Common/Footer";
import JobDescription from "../components/JobDescriptionComponent";
import Profile from "../components/ProfileComponent";
import ChangePassword from "../components/ProfileComponents/ChangePassword";
import ProfileUpdateForm from "../components/ProfileComponents/ProfileUpdate/UpdateForm";
import SeekerCategory from "../components/SeekerCategory";
import SeekerCompany from "../components/SeekerCompany";
import ApplicantHome from "../components/SeekerHome";

export default function Seeker() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <SeekerNav toggle={toggle} />

      <div className="seeker-gradient-two">
        <Routes>
          <Route path="/home" element={<ApplicantHome id="home" />} />

          <Route path="/category" element={<SeekerCategory />} />
          <Route path="/company" element={<SeekerCompany />} />
          <Route path="/company/:id" element={<Careers />} />
          <Route path="/jobs" element={<SeekerJobs />} />
          <Route path="/profile" element={<Profile />} />

          <Route
            path="/profile/profileUpdate"
            element={<ProfileUpdateForm />}
          />
          <Route path="/profile/changePassword" element={<ChangePassword />} />
          <Route path="/appliedJobs" element={<AppliedJobs />} />
          <Route path="/savedJobs" element={<SavedJobs />} />
          <Route path="/job/:id" element={<JobDescription />} />
          <Route path="/events" element={<ApplicantEvents />} />
          <Route path="/todos" element={<ApplicantTodos />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}
