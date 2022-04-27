import React from "react";
import CheckboxComponent from "../CheckboxComponent";
import { FilterListSelect } from "../FilterListToggle";
import { categoryList, typeList } from "../SearchbarComponent/Constants";
import {
  Label,
  InputGroup,
  FilterContainer,
  Togglegroup,
} from "./FilterComponents";

function FilterPanel({
  selectedType,
  selectToggle,
  selectCategoryToggle,
  locations,
  changeChecked,
}) {
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

      <InputGroup>
        <Label>Locations</Label>
        {locations.map((location) => (
          <CheckboxComponent
            key={location.id}
            options={location}
            changeChecked={changeChecked}
          />
        ))}
      </InputGroup>
      {/* <CategoryFilter></CategoryFilter>
      <LocationFilter></LocationFilter>
      <PayRangeFilter></PayRangeFilter> */}
    </FilterContainer>
  );
}

export default FilterPanel;
