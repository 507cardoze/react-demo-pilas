import React from "react";
import "./styles.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section id="hero">
      <div className="hero-text">
        <Typography
          variant="h2"
          style={{ fontWeight: "bold" }}
          component="div"
          gutterBottom
        >
          Demo de estructura de datos
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          Tiene como objectivo demostrar como funcionan alguno de las estructura
          de datos datas en clase con ejemplos dinamicos.
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: 5,
          }}
        >
          <Button
            component={Link}
            size="large"
            to={{
              pathname: "https://github.com/507cardoze/react-demo-pilas",
            }}
            target="_blank"
            variant="outlined"
          >
            Código fuente
          </Button>
          <Button size="large" component={Link} to="/pilas" variant="contained">
            Ejemplo de pilas
          </Button>
        </Stack>
      </div>
    </section>
  );
}

export default Home;
