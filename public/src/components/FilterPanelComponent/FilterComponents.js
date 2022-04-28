import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import styled from "styled-components";
import ToggleGroup from "../FilterListToggle";

export const Label = styled.p`
  margin-bottom: 0.8rem;
  font-weight: 600;
`;

export const InputGroup = styled.div`
  /* margin-bottom: 2rem; */
  margin: 2rem 0;
`;

export const FilterContainer = styled.div`
  height: 100vh;
`;

export const LabelRange = styled.p`
  margin-bottom: 2.5rem;
`;

export const Togglegroup = styled(ToggleGroup)`
  display: flex;
  justify-content: space-around !important;
`;

export const Countrydropdown = styled(CountryDropdown)`
  padding: 0.2rem;
  text-align: center;
  max-width: 100%;
  margin-bottom: 1rem;
  outline: none;
  background-color: transparent;
  width: max-content;
  border-radius: 0.8rem;

  option {
    text-align: left;
  }
`;

export const Regiondropdown = styled(RegionDropdown)`
  padding: 0.2rem;
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
  outline: none;
  background-color: transparent;
  border-radius: 0.8rem;

  option {
    text-align: left;
  }
`;
