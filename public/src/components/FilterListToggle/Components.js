import styled from "styled-components";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Select } from "@material-ui/core";

export const ToggleGroup = styled(ToggleButtonGroup)`
  display: flex;
  justify-content: space-around;
`;

export const SelectBox = styled(Select)`
  padding: 1rem;

  &:focus {
    background-color: transparent !important;
  }
`;
