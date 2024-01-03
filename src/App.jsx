// Import necessary dependencies
import React, { useState } from "react";
import Navbar from "./Navbar.jsx"; // Make sure to replace './Navbar' with the actual path to your Navbar component
import MovieGrid from "./MovieGrid"; // Replace './MovieGrid' with the actual path to your MovieGrid component
import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

// Functional component for App
const App = () => {
  const [filterMovies, setFiltered] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc";
      const headers = {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTA4N2UwOWQ1NWMxZDA2YzJmYzZkMDU3NzJiOTFiMyIsInN1YiI6IjY1OTJkZGFhZTY0MGQ2MDFhYmQ1Yzc4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yK6hhXJrNK0SiPWxAkWaohS2mRzzEH6PTzkpUfNo0Zk",
      };

      try {
        const response = await axios.get(url, { headers });
        setFiltered(response.data.results);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar setFiltered={setFiltered} filterMovies={filterMovies} />
      <div
        style={{ backgroundColor: "#bad6f2", height: "100vh", padding: "1rem" }}
      >
        <Container maxWidth="xl">
          <Typography
            variant="h3"
            align="center"
            sx={{ color: "#07233f", margin: "2rem" }}
          >
            Movie App
          </Typography>
          <MovieGrid filterMovies={filterMovies} />
        </Container>
      </div>
      <div style={{ height: "65rem" }}></div>
    </div>
  );
};

export default App;
