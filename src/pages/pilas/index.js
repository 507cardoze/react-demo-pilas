import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Card, CardContent, Box, Stack } from "@mui/material";
import "./styles.css";
//import { motion } from "framer-motion";

function Pilas() {
  const [pila, setPila] = useState([]);
  const [action, setAction] = useState(false);

  function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const handlePush = () => {
    if (pila.length < 6) {
      setAction(true);
      const number = generateNumber(1, 100);
      const newArray = [...pila, number];
      setPila(newArray);
    }

    return null;
  };

  const handlePop = () => {
    setAction(false);
    const newArray = [...pila];
    newArray.pop();
    setPila(newArray);
  };

  return (
    <>
      <section id="pilas">
        <div className="hero-text">
          <Typography
            variant="h2"
            style={{ fontWeight: "bold" }}
            component="div"
            gutterBottom
          >
            Pilas o Stack
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Una pila (stack en inglés) es una lista ordenada o estructura de
            datos que permite almacenar y recuperar datos, siendo el modo de
            acceso a sus elementos de tipo LIFO (del inglés Last In, First Out,
            «último en entrar, primero en salir»).
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Esta estructura se aplica en multitud de supuestos en el área de la
            informática debido a su simplicidad y capacidad de dar respuesta a
            numerosos procesos.
          </Typography>
          <Button
            component="a"
            size="large"
            href="#workplace"
            variant="contained"
            sx={{ my: 5 }}
          >
            Ver estructura
          </Button>
        </div>
      </section>
      <section id="workplace">
        <Card raised sx={{ width: "75%", height: "75%" }}>
          <CardContent raised>
            <Stack
              spacing={2}
              direction={{ xs: "column", lg: "row" }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                my: 5,
              }}
            >
              <Typography className="gray-text" variant="h1" component="div">
                PILA o STACK :
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  border: "1px solid black",
                  p: 1.5,
                  minHeight: 64 + 25,
                  minWidth: 64 + 25,
                }}
              >
                {pila.map((value) => (
                  <Box
                    className="slide-in-right"
                    sx={{
                      width: 64,
                      height: 64,
                      fontSize: "24px",
                      fontWeight: "bold",
                      border: "1px solid black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "lightgray",
                      "&:hover": {
                        backgroundColor: "gray",
                        opacity: [0.9, 0.8, 0.7],
                      },
                      m: 0.5,
                    }}
                  >
                    {value}
                  </Box>
                ))}
              </Box>
            </Stack>
            <Stack
              spacing={2}
              direction={{ xs: "column", lg: "row" }}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h4"
                className="gray-text"
                gutterBottom
                component="div"
              >
                Valor de la CIMA:
              </Typography>
              <Typography variant="h1" component="div" gutterBottom>
                {pila.length > 0 ? pila[pila.length - 1] : "Pila vacia."}
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction={{ xs: "column", lg: "row" }}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 2,
              }}
            >
              <Typography
                variant="h4"
                className="gray-text"
                gutterBottom
                component="div"
              >
                Cantidad de elementos en la PILA:
              </Typography>
              <Typography
                variant="h1"
                component="div"
                gutterBottom
                color={pila.length < 6 ? "black" : "red"}
              >
                {pila.length}
              </Typography>
              {pila.length >= 6 ? (
                <Typography
                  variant="h1"
                  component="div"
                  gutterBottom
                  color="red"
                >
                  ( MAX )
                </Typography>
              ) : (
                ""
              )}
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 5,
              }}
            >
              <Button
                component="a"
                size="large"
                href="#workplace"
                variant="contained"
                onClick={handlePush}
                disabled={pila.length >= 6 ? true : false}
              >
                Agregar numero a la pila
              </Button>
              <Button
                component="a"
                size="large"
                href="#workplace"
                variant="contained"
                onClick={handlePop}
                disabled={pila.length === 0 ? true : false}
              >
                Quitar el numero de la cima
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

export default Pilas;
