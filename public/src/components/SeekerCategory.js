import React from "react";
import CategoryDescription from "./ApplicantPageComponents/CategoryLoadSection";
import Categories from "./ApplicantPageComponents/Home/CategorySection";
// import CategoryDescription from "./CategoryLoadSection";
import {
  catObjOne,
  catObjThree,
  catObjTwo,
} from "./ApplicantPageComponents/Home/CategorySection/Data";
const SeekerHome = () => {
  return (
    <div id="category">
      <CategoryDescription />
      <Categories {...catObjOne} />
      <Categories {...catObjTwo} />
      <Categories {...catObjThree} />
    </div>
  );
};

export default SeekerHome;
