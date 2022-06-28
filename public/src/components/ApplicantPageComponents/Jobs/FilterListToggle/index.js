import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { SelectBox, ToggleGroup } from "./Components";
const useStyles = makeStyles({
  root: {
    width: "100%",
    justifyContent: "space-between",
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: ".9rem",
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
      backgroundColor: "#045DE9",
      color: "#fff",
    },
    "&.MuiSelect-select:focus": {
      borderRadius: 0,
      backgroundColor: "transparent !important",
    },

    "&.MuiToggleButton-root": {
      "&:hover": {
        background: "#045DE9",
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
        <ToggleButton
          className={classes.toggle}
          key={id}
          value={value}
          style={{ fontWeight: 500, color: "white", borderColor: "white" }}
        >
          {label}
        </ToggleButton>
      ))}
    </ToggleGroup>
  );
}

export default FilterListToggle;

export function FilterListSelect({
  options,
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
        style={{
          backgroundColor: "transparent",
          color: "#045DE9",
          cursor: "pointer",
          textAlign: "center",
          fontWeight: 500,
          fontSize: "1rem",
        }}
        onFocus={() => {
          this.style.backgroundColor = "transparent";
        }}
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
