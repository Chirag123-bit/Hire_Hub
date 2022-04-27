import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { makeStyles } from "@material-ui/core/styles";
import { Formcontrol, SelectBox, ToggleGroup } from "./Components";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    justifyContent: "space-between",
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: ".8rem",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)": {
      borderRadius: "10px",
    },
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)": {
      borderRadius: "10px",
      border: "1px solid rgba(0, 0, 0, 0.12)",
    },
    "&.Mui-selected": {
      borderRadius: "10px",
      background: "#000",
      color: "#fff",
    },
    "&.MuiToggleButton-root": {
      "&:hover": {
        background: "#000",
        color: "#fff",
      },
    },
  },
});

function FilterListToggle({ options, value, selectToggle }) {
  const classes = useStyles();
  return (
    <ToggleGroup
      value={value}
      onChange={selectToggle}
      className={classes.root}
      exclusive
    >
      {options.map(({ label, id, value }) => (
        <ToggleButton className={classes.toggle} key={id} value={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleGroup>
  );
}

export default FilterListToggle;

export function FilterListSelect({
  options,
  value,
  selectCategoryToggle,
  inputLabel,
}) {
  const classes = useStyles();
  return (
    <FormControl style={{ width: "100%" }}>
      <InputLabel>{inputLabel}</InputLabel>
      <SelectBox
        onChange={selectCategoryToggle}
        className={classes.root}
        style={{ backgroundColor: "transparent", color: "#045DE9" }}
      >
        {options.map(({ label, id, value }) => (
          <MenuItem
            className={classes.toggle}
            key={id}
            value={value}
            style={{ backgroundColor: "transparent", color: "#045DE9" }}
          >
            {label}
          </MenuItem>
        ))}
      </SelectBox>
    </FormControl>
  );
}
