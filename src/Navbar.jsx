import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchAppBar({ filterMovies, setFiltered }) {
  const handleSubmit = async (e) => {
    const url =
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc";
    const headers = {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZTA4N2UwOWQ1NWMxZDA2YzJmYzZkMDU3NzJiOTFiMyIsInN1YiI6IjY1OTJkZGFhZTY0MGQ2MDFhYmQ1Yzc4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yK6hhXJrNK0SiPWxAkWaohS2mRzzEH6PTzkpUfNo0Zk",
    };

    const response = await axios.get(url, { headers });

    const Array = response.data.results.filter((item) =>
      item.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setFiltered(Array);
  };
  return (
    <AppBar position="static" sx={{ boxShadow: "none" }} color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
        <form action="">
          <TextField
            onChange={handleSubmit}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "black" }}></SearchIcon>
                </InputAdornment>
              ),
              color: "black",
            }}
            placeholder="Search.."
            variant="filled"
            type="search"
            size="small"
          />
        </form>
      </Toolbar>
    </AppBar>
  );
}
