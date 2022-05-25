export const Styles = {
  formContainer: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "7rem",
  },
  form: {
    minHeight: "22rem",
    padding: "16px",
  },

  transparent: {
    backgroundColor: "rgba(0, 0, 0, 0.3)  !important",
    borderRadius: "10px",
  },

  input: {
    "&::placeholder": {
      color: "white",
    },
    MuiSelected: { color: "orange" },
  },
};
