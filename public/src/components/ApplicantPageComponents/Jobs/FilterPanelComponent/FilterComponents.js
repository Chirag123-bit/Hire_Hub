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
  /* height: 100vh; */
  backdrop-filter: blur(20px);
  color: white;
  padding-left: 1rem;
  padding-right: 0.2rem;
  padding-top: 1rem;
`;

export const LabelRange = styled.p`
  margin-bottom: 2.5rem;
`;

export const Togglegroup = styled(ToggleGroup)`
  display: flex;
  justify-content: space-between !important;
  margin-left: 0 !important;

  button {
    border-color: white !important;
    /* border-color: white; */
  }
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
  color: white;
  border-color: white !important;

  option {
    text-align: left;
    backdrop-filter: blur(20px);
    color: black;
    background-color: white;
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
  color: white;
  border-color: white !important;

  option {
    text-align: left;
    backdrop-filter: blur(20px);
    color: black;
    background-color: white;
  }
`;
