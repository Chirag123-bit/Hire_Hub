import Checkbox from "@material-ui/core/Checkbox";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "rgb(4, 93, 233)",
    },
  },

  checked: {},
  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0,
  },
  label: {
    fontSize: "0.8rem",
    fontFamily: `'Raleway', sans-sarif`,
  },
});

function CheckboxComponent({ options, changeChecked }) {
  const classes = useStyles();
  const { checked, label, id } = options;
  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap,
        }}
        control={
          <Checkbox
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
          />
        }
        label={label}
      />
    </div>
  );
}

export default CheckboxComponent;
