import React, { useState } from "react";
import FilterPanel from "../FilterPanelComponent";
import ListComponent from "../ListComponent";
import SearchBar from "../SearchbarComponent";
import {
  ContentHolder,
  HomePanalListWrap,
  HomePanalWrap,
  ListWrap,
} from "./JobComponents";

function SeekerJobs() {
  const [selectedType, setSelectedType] = useState(null);
  const handleSelectType = (event, value) => {
    return !value ? null : setSelectedType(value);
  };
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectCategoryToggle = (event, value) => {
    console.log(value.props.value);
    return !value ? null : setSelectedCategory(value.props.value);
  };
  return (
    <div id="jobs">
      <ContentHolder>
        <SearchBar />
        <HomePanalListWrap>
          <HomePanalWrap>
            <FilterPanel
              selectToggle={handleSelectType}
              selectedType={selectedType}
              selectedCategory={selectedCategory}
              selectCategoryToggle={selectCategoryToggle}
            />
          </HomePanalWrap>
          <ListWrap>
            <ListComponent />
          </ListWrap>
        </HomePanalListWrap>
      </ContentHolder>
    </div>
  );
}

export default SeekerJobs;
