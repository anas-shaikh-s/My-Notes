import React, { Component } from "react";
// import "./formStyle.css";
import {
  TextField,
  Button,
  Typography,
  Container,
  withStyles,
} from "@material-ui/core/";

const emailRegex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");

const style = {
  container: {
    backgroundColor: "#f3f3f3db",
    width: "40%",
    margin: "auto",
    borderRadius: "10px",
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
};

class Form extends Component {
  state = {
    usernameError: false,
    usernameErrortext: "",
    emailError: false,
    emailErrorText: "",
  };
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.container} >
        <form className={classes.formContainer}>
          <Typography variant="h3" color="primary">
            Material ui forms
          </Typography>
          <TextField
            label="username"
            required
            error={this.state.usernameError}
            helperText={this.state.usernameErrortext}
            type="text"
            onBlur={(e) => {
              if (e.target.value === "") {
                this.setState({
                  usernameError: true,
                  usernameErrortext: "username is required!",
                });
              } else {
                this.setState({
                  usernameError: false,
                  usernameErrortext: "",
                });
              }
            }}
          />

          <TextField
            label="email"
            required
            error={this.state.emailError}
            helperText={this.state.emailErrorText}
            type="email"
            onBlur={(e) => {
              if (!emailRegex.test(e.target.value)) {
                this.setState({
                  emailError: true,
                  emailErrorText: "Email is not valid!",
                });
              } else {
                this.setState({
                  emailError: false,
                  emailErrorText: "",
                });
              }
            }}
          />
          <Button
            disabled={this.state.emailError || this.state.usernameError}
            variant="outlined"
            color="secondary"
            // id="submit-btn"
            className={classes.submitBtn}
            type="submit"
          >
            Submit
          </Button>
          {/* <button
          type="submit"
          onClick={}
        >
          submit
        </button> */}
        </form>
      </Container>
    );
  }
}

export default withStyles(style)(Form);
