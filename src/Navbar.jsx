import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchAppBar({ filterMovies, setFiltered, allMovies }) {
  const handleSubmit = (e) => {
    const Array = allMovies.filter((item) =>
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
