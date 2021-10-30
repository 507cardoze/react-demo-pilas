import React from "react";
import "./styles.css";
import Typography from "@mui/material/Typography";

function Integrantes() {
  return (
    <section id="integrantes" style={{ width: "100%", height: "100vh" }}>
      <div className="hero-text">
        <Typography
          variant="h2"
          style={{ fontWeight: "bold" }}
          component="div"
          gutterBottom
        >
          Integrantes:
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
          Anthony Cardoze - 8-850-1742
        </Typography>
      </div>
    </section>
  );
}

export default Integrantes;
