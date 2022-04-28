import React from "react";
import CheckboxComponent from "../CheckboxComponent";
import { FilterListSelect } from "../FilterListToggle";
import { categoryList, typeList } from "../SearchbarComponent/Constants";
import SliderComponent from "../SliderComponent";

import {
  Label,
  InputGroup,
  FilterContainer,
  Togglegroup,
  Countrydropdown,
  Regiondropdown,
} from "./FilterComponents";

function FilterPanel({
  selectedType,
  selectToggle,
  selectedCategory,
  changeChecked,
  selectedPrice,
  changedPrice,
  setCountry,
  country,
  region,
  setRegion,
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
        <Label>Job Categories</Label>
        {selectedCategory.map((category) => (
          <CheckboxComponent
            key={category.id}
            options={category}
            changeChecked={changeChecked}
          />
        ))}
      </InputGroup>

      <InputGroup>
        <Label>Country</Label>
        <Countrydropdown
          value={country}
          onChange={(val) => {
            setCountry(val);
          }}
        />
      </InputGroup>

      <InputGroup>
        <Label>Region</Label>
        <Regiondropdown
          country={country}
          value={region}
          onChange={(val) => setRegion(val)}
        />
      </InputGroup>

      <InputGroup>
        <Label>Pay Range</Label>
        <SliderComponent value={selectedPrice} changedPrice={changedPrice} />
      </InputGroup>
    </FilterContainer>
  );
}

export default FilterPanel;
