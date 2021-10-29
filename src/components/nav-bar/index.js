import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import "./styles.css";

function Navigation() {
  return (
    <AppBar position="static" id="nav-bar">
      <Toolbar>
        <Typography variant="h6" component="div">
          UTP || Estructura de datos I
        </Typography>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/pilas" color="inherit">
          Pilas
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
