import { Select } from "@material-ui/core";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import styled from "styled-components";

export const ToggleGroup = styled(ToggleButtonGroup)`
  display: flex;
  justify-content: space-around;
  border-color: white;
`;

export const SelectBox = styled(Select)`
  padding: 1rem;
  padding-bottom: 0;
  cursor: pointer;

  &:focus {
    background-color: transparent !important;
  }
`;
