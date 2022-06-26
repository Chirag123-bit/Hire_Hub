import Companies from "./ApplicantPageComponents/Home/SeekerCompanies";
import SeekerHero from "./ApplicantPageComponents/Home/SeekerHero";
import SeekerJob from "./ApplicantPageComponents/Home/SeekerJob";
import SeekerSolutions from "./ApplicantPageComponents/Home/SeekerSolutions";
// import ParticleBackground from "./ParticleBackground";

const ApplicantHome = () => {
  return (
    <div id="home" style={{}}>
      <div className="seeker-gradient">
        <SeekerHero />
      </div>
      <SeekerSolutions />
      <SeekerJob />
      <Companies />
    </div>
  );
};

export default ApplicantHome;
