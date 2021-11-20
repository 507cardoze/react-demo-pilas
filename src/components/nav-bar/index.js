import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import "./styles.css";

function Navigation() {
  return (
    <AppBar position="static" id="nav-bar">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">
          UTP || Estructura de datos I
        </Button>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Button component={Link} to="/pilas" color="inherit">
          Pilas
        </Button>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Button component={Link} to="/colas" color="inherit">
          Colas
        </Button>
        <Divider orientation="vertical" flexItem sx={{ flexGrow: 1 }} />
        <Button component={Link} to="/integrantes" color="inherit">
          Integrantes
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
