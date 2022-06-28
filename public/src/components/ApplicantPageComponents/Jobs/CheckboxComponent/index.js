import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

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
    fontSize: "1rem",
    fontFamily: `'Raleway', sans-sarif`,
    fontWeight: 500,
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
        style={{
          color: checked ? "#045DE9" : "white !important",
          fontWeight: "bold",
          transition: "background-color 0.5s ease",
        }}
      />
    </div>
  );
}

export default CheckboxComponent;
