export const Styles = {
  formContainer: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "6rem",
  },
  form: {
    minHeight: "22rem",
    padding: "16px",
  },

  transparent: {
    backgroundColor: "rgba(181, 175, 175, 0.2)  !important",
    borderRadius: "10px",
    // border: "1px solid rgba(255, 255, 255, 0.18)",
  },
  transparentBorder: {
    backgroundColor: "rgba(181, 175, 175, 0.2) !important",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
  },
  input: {
    "&::placeholder": {
      color: "white",
    },
  },
};
