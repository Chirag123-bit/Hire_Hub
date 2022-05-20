import { TextField, Typography } from "@material-ui/core";

export const renderText = ({ label, color, align, variant }) => {
  return (
    <Typography
      color={color ? color : "primary"}
      align={align ? align : "center"}
      variant={variant ? variant : "h6"}
    >
      {label}
    </Typography>
  );
};

export const renderInputText = ({
  label,
  name,
  color,
  state,
  handleOnChange,
}) => {
  const { data, errors } = state;
  return (
    <TextField
      label={label}
      color={color ? color : "primary"}
      variant="outlined"
      fullWidth={true}
      size="small"
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name]}
      onChange={handleOnChange}
    />
  );
};
