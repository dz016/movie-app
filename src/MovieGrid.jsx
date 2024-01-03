import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import MovieCard from "./MovieCard";

const MovieGrid = ({ filterMovies }) => {
  const movies = [];

  for (let i = 0; i < filterMovies.length; i++) {
    movies.push(
      <Grid item md={3} sm={6} xs={12} key={i}>
        <MovieCard filterMovie={filterMovies[i]} />
      </Grid>
    );
  }

  return (
    <>
      <Grid container spacing={2}>
        {movies}
      </Grid>
    </>
  );
};

export default MovieGrid;
