import React from "react";
import CategoryDescription from "./CategoryLoadSection";
import Categories from "./CategorySection";
import { catObjOne, catObjThree, catObjTwo } from "./CategorySection/Data";
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
