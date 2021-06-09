import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Note from "../components/Note";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);
  const handleDelete = async (id) => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  // breakpoints to display number of columns as per the divice width
  const breakPoints = { default: 3, 800: 1, 1110: 2 };
  return (
    <Container>
      {/* using masnory */}
      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <Note note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>

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
