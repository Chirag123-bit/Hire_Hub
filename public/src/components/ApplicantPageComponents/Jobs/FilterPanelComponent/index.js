import CheckboxComponent from "../CheckboxComponent";
import { typeList } from "../SearchbarComponent/Constants";
import SliderComponent from "../SliderComponent";

import {
  Countrydropdown,
  FilterContainer,
  InputGroup,
  Label,
  Regiondropdown,
  Togglegroup,
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
  reset,
}) {
  return (
    <FilterContainer onDoubleClick={reset}>
      <InputGroup>
        <Label>Job Type</Label>
        <div style={{ width: "100%" }}>
          <Togglegroup
            options={typeList}
            value={selectedType}
            selectToggle={selectToggle}
          />
        </div>
      </InputGroup>

      <InputGroup>
        <Label>Job Categories</Label>
        {selectedCategory.map((category) => (
          <CheckboxComponent
            key={category.id}
            options={category}
            changeChecked={changeChecked}
            style={{ color: "white" }}
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
