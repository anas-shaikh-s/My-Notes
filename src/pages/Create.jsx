import React, { useState } from "react";
import {
  Container,
  TextField,
  Typography,
  Button,
  makeStyles,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormLabel,
  FormControl,
} from "@material-ui/core";

import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import { useHistory } from "react-router";
const useStyles = makeStyles({
  field: {
    marginTop: 10,
    display: "block",
  },
  btn: {
    marginTop: 10,
  },
});
const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("money");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(title, details);
    setDetailsError(false);
    setTitleError(false);
    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
  };
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h3" color="primary">
        Create Note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          required
          error={titleError}
          label="Note Title"
          variant="outlined"
          fullWidth
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <TextField
          className={classes.field}
          required
          error={detailsError}
          label="Details"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <FormControl className={classes.field}>
          <FormLabel> Category </FormLabel>
          <RadioGroup
            value={category}
            color="primary"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <FormControlLabel
              value="money"
              label="Money"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="todos"
              label="Todos"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="work"
              label="Work"
              control={<Radio color="primary" />}
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          className={classes.btn}
          variant="contained"
          color="primary"
          endIcon={<AddBoxOutlinedIcon />}
        >
          Add
        </Button>
      </form>
    </Container>
  );
};

export default Create;
