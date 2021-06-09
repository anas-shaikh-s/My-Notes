import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import { blue, green, red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  test: (note) => {
    if (note.category === "work") {
      return {
        backgroundColor: red[500],
      };
    }
    if (note.category === "todos") {
      return {
        backgroundColor: blue[500],
      };
    }
    if (note.category === "money") {
      return {
        backgroundColor: green[500],
      };
    }
  },
});
const Note = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <Card elevation={1}>
      <CardHeader
        avatar={
          <Avatar className={classes.test}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton
            onClick={() => {
              handleDelete(note.id);
            }}
          >
            <DeleteOutline />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />
      <CardContent>
        <Typography variant="body2">{note.details}</Typography>
      </CardContent>
    </Card>
  );
};

export default Note;
