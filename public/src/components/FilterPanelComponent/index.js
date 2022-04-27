import React from "react";
import { FilterListSelect } from "../FilterListToggle";
import { categoryList, typeList } from "../SearchbarComponent/Constants";
import {
  Label,
  InputGroup,
  FilterContainer,
  Togglegroup,
} from "./FilterComponents";

function FilterPanel({ selectedType, selectToggle, selectCategoryToggle }) {
  return (
    <FilterContainer>
      <InputGroup>
        <Label>Job Type</Label>
        <Togglegroup
          options={typeList}
          value={selectedType}
          selectToggle={selectToggle}
        />
      </InputGroup>

      <InputGroup>
        <Label style={{ marginTop: "2rem", marginBottom: 0 }}>
          Job Category
        </Label>
        <FilterListSelect
          options={categoryList}
          selectCategoryToggle={selectCategoryToggle}
          inputLabel="Select a Category"
        />
      </InputGroup>
      {/* <CategoryFilter></CategoryFilter>
      <LocationFilter></LocationFilter>
      <PayRangeFilter></PayRangeFilter> */}
    </FilterContainer>
  );
}

export default FilterPanel;
