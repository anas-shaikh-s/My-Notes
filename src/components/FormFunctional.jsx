import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  makeStyles,
  Button,
} from "@material-ui/core";
const emailRegex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

const useStyles = makeStyles({
  container: {
    backgroundColor: "#f3f3f3db",
    width: "40%",
    margin: "auto",
    borderRadius: "10px",
    marginTop: "2rem",
    padding: "20px 15px",
  },
  formContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
  },
  submitBtn: {
    marginTop: "1rem",
  },
});

const FormFunctional = () => {

  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrortext, setUsernameErrorText] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [emailErrorText, setEmailErrorText] = useState("");
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h3" color="primary">
        From Functional
      </Typography>
      <form className={classes.formContainer}>
        <TextField
          label="username"
          required
          error={usernameError}
          helperText={usernameErrortext}
          type="text"
          onBlur={(e) => {
            if (e.target.value === "") {
              setUsernameError(true);
              setUsernameErrorText("username is required");
            } else {
              setUsernameError(false);
              setUsernameErrorText("");
            }
          }}
        />

        <TextField
          label="email"
          required
          error={emailError}
          helperText={emailErrorText}
          type="email"
          // color='secondary'
          onBlur={(e) => {
            if (!emailRegex.test(e.target.value)) {
              setEmailError(true);
              setEmailErrorText("Invalid Email");
            } else {
              setEmailError(false);
              setEmailErrorText("");
            }
          }}
        />
        <Button
          className={classes.submitBtn}
          variant="contained"
          // color="secondary"
          disabled={emailError || usernameError}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default FormFunctional;
