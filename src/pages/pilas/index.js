import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Card, CardContent, Box, Stack, TextField } from "@mui/material";
import "./styles.css";

function Pilas() {
  const [pila, setPila] = useState([]);
  const [input, setInput] = useState(0);

  const handlePush = (event) => {
    event.preventDefault();
    if (pila.length < 6) {
      const newArray = [...pila, input];
      setInput("");
      setPila(newArray);
    }

    return null;
  };

  const handlePop = () => {
    const newArray = [...pila];
    newArray.pop();
    setPila(newArray);
  };

  console.log(input);

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
        <Card raised sx={{ width: "90%" }}>
          <CardContent>
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
                {pila.map((value, index) => (
                  <Box
                    className="slide-in-right"
                    sx={{
                      width: 84,
                      height: 84,
                      fontSize: "16px",
                      fontWeight: "bold",
                      border: "1px solid black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      backgroundColor: "lightgray",
                      "&:hover": {
                        backgroundColor: "gray",
                        opacity: [0.9, 0.8, 0.7],
                      },
                      m: 0.5,
                    }}
                  >
                    <span>{`Indice: ${index + 1}`}</span>
                    <span>{`Valor: ${value}`}</span>
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
                m: 5,
              }}
            >
              <Stack component="form" onSubmit={handlePush} spacing={2}>
                <TextField
                  required
                  label="Requerido"
                  type="number"
                  value={input}
                  onChange={(event) => {
                    const number = parseInt(event.target.value);
                    if (number <= 100 && number > 0) {
                      setInput(number);
                    }
                  }}
                />
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  disabled={
                    pila.length >= 6 || (input >= 0 && input > 100)
                      ? true
                      : false
                  }
                >
                  Agregar numero a la pila
                </Button>
              </Stack>
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
