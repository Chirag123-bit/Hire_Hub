import React from "react";
import { typeList } from "../SearchbarComponent/Constants";
import {
  Label,
  inputGroup,
  FilterContainer,
  Togglegroup,
} from "./FilterComponents";

function FilterPanel({ selectedType, selectToggle }) {
  return (
    <FilterContainer>
      <inputGroup>
        <Label>Job Type</Label>
        <Togglegroup
          options={typeList}
          value={selectedType}
          selectToggle={selectToggle}
        />
        {/* <TypeFilter /> */}
      </inputGroup>
      {/* <CategoryFilter></CategoryFilter>
      <LocationFilter></LocationFilter>
      <PayRangeFilter></PayRangeFilter> */}
    </FilterContainer>
  );
}

export default FilterPanel;
