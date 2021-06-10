import React from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
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
const Note = ({ note, handleDelete, open, handleClose, handleClickOpen }) => {
  // const [open, setOpen] = useState(false);

  // const handleClose = () => {
  //   setOpen(false);
  //   // console.log(confirm);
  // };
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const classes = useStyles(note);
  return (
    <>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.test}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={handleClickOpen}>
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
      {/* dialog for confirm delete */}
      <Dialog
        open={open}
        onClose={handleClose}
        // PaperComponent={PaperComponent}
        // aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }}>Confirm</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              // setConfirm(true);
              handleDelete(note.id, true);
              // handleClose();
            }}
            color="secondary"
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              // setConfirm(false);
              handleDelete(note.id, false);
            }}
            color="primary"
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Note;
