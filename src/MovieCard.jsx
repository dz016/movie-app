import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//backdrop
const MovieCard = ({ filterMovie }) => {
  return (
    <Card style={{ Width: 500, backgroundColor: "#8cbbe9" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={
          "https://image.tmdb.org/t/p/original/" + filterMovie.backdrop_path
        }
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ letterSpacing: "-1.5px" }}
        >
          {filterMovie.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: 75, overflow: "scroll", letterSpacing: "-1px" }}
        >
          {filterMovie.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{filterMovie.popularity}</Button>
        <Button size="small">{filterMovie.vote_average}</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
