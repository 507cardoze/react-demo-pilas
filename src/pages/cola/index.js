import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Card, CardContent, Box, Stack, TextField } from "@mui/material";
import "./styles.css";

function Colas() {
  const [cola, setCola] = useState([]);
  const [input, setInput] = useState(0);

  const enColar = (event) => {
    event.preventDefault();
    setCola([...cola, input]);
    setInput(0);
  };

  const desColar = () => {
    setCola(cola.slice(1));
    setInput(0);
  };

  return (
    <>
      <section id="colas">
        <div className="hero-text">
          <Typography
            variant="h2"
            style={{ fontWeight: "bold" }}
            component="div"
            gutterBottom
          >
            Colas o queue
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Las Colas son estructura de datos lineales estaticas, en las que los
            elementos se introducen o añaden por un extremo(FINAL) y se eliminan
            o sacan por el otro extremo (FRENTE).
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            Los elementos se sacan de la cola en el mismo orden en la que se
            insertaron, es decir, que el primer elemento que se añade a la cola
            es primer elemento que se saca, en otras palabras las COLAS tienen
            una estructura de datos "primero en entrar, primero en salir",
            también conocidas con acrónimo de FIFO (First in, First Out).
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
                COLA o QUEUE :
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
                {cola.map((value, index) => (
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
                    <span>{`Valor: ${value}`}</span>
                  </Box>
                ))}
              </Box>
            </Stack>
            <Box
              style={{
                marginBottom: "30px",
                paddingLeft: "500px",
                paddingRight: "500px",
              }}
            >
              <Stack style={{ flexDirection: "row", margin: "15px" }}>
                <Typography className="gray-text" variant="h3" component="div">
                  Frente:
                </Typography>
                <div style={{ flexGrow: 1 }} />
                <Typography className="gray-text" variant="h3" component="div">
                  {cola.length ? cola[0] : "No hay elementos."}
                </Typography>
              </Stack>
              <Stack style={{ flexDirection: "row", margin: "15px" }}>
                <Typography className="gray-text" variant="h3" component="div">
                  Final:
                </Typography>
                <div style={{ flexGrow: 1 }} />
                <Typography className="gray-text" variant="h3" component="div">
                  {cola.length ? cola[cola.length - 1] : "No hay elementos."}
                </Typography>
              </Stack>
            </Box>

            <Stack
              style={{display: "flex", justifyContent: "center" , alignItems: "center"}}
              component="form"
              onSubmit={enColar}
              spacing={2}
            >
              <TextField
                  required
                  style={{ maxWidth: "250px" }}
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
                  style={{ maxWidth: "250px" }}
                  size="large"
                  variant="contained"
                  disabled={cola.length >= 6 || input <= 0 ? true : false}
                >
                  Agregar numero a la cola
                </Button>
                <Button
                  size="large"
                  style={{ maxWidth: "250px" }}
                  variant="contained"
                  onClick={desColar}
                  disabled={cola.length === 0 ? true : false}
                >
                  Quitar el numero de la cola
                </Button>
            </Stack>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

export default Colas;
