import { Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Note from "../components/Note";
import Loader from "./Loder";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState("false");
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err.message);
        setLoading(false);
        setErrorMsg(err.message);
      });
  }, []);

  const handleDelete = async (id, confirm) => {
    setOpen(false);
    if (confirm) {
      setLoading(true);
      await fetch(`http://localhost:8000/notes/${id}`, {
        method: "DELETE",
      });
      const newNotes = notes.filter((note) => note.id !== id);
      setNotes(newNotes);
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    // console.log(confirm);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  // breakpoints to display number of columns as per the divice width
  const breakPoints = { default: 3, 800: 1, 1110: 2 };

  return loading ? (
    <Loader />
  ) : (
    <Container>
      {/* using masnory */}
      {errorMsg ? (
        <Typography variant="h4" align="center">
          {errorMsg}
        </Typography>
      ) : notes.length > 0 ? (
        <Masonry
          breakpointCols={breakPoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {notes.map((note) => (
            <div key={note.id}>
              <Note
                note={note}
                handleDelete={handleDelete}
                open={open}
                handleClose={handleClose}
                handleClickOpen={handleClickOpen}
              />
            </div>
          ))}
        </Masonry>
      ) : (
        <Typography variant="h4" align="center">
          No notes
        </Typography>
      )}

      {/* using mui grid system */}
      {/* <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} md={6} lg={4}>
            <Note note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid> */}
    </Container>
  );
};

export default Notes;
