import { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Card, CardContent, Box, Stack, TextField } from "@mui/material";
import "./styles.css";

function Colas() {
    const [cola, setCola] = useState([]);
    const [input, setInput] = useState(0);

    const enColar = () => {
        setCola([ ...cola, input]);
        setInput(0);
      }
      
    const desColar = () => {
        setCola(cola.slice(1))  
      }

    //   const findByIdQueue = (array, id) => {
    //     const i = array.findIndex(item => item.id_queue === id);
    //     // if i = -1 (not found) return undefined else return found item
    //     return ~i ? undefined : array[i];
    //   }

    //   const selectFirstItem = state => {
    //     // access state.fifo but set fifo to [] if state or state.fifo are undefined
    //     const { cola = [] } = state || {};
    //     // return first array item or undefined if there is an empty list
    //     return cola[0]; 
    //   }

    //   const selectItemById = (state, ownProp) => {
    //     const { cola = [] } = state || {};
    //     const { id } = ownProp || {};
    //     return findByIdQueue(cola, id);
    //   }


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
          Las Colas son estructura de datos lineales estaticas, en las que los elementos se introducen o añaden por un extremo(FINAL) y se eliminan o sacan por el otro extremo (FRENTE).
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
          Los elementos se sacan de la cola en el mismo orden en la que se insertaron, es decir, que el primer elemento que se añade a la cola es primer elemento que se saca, en otras palabras las COLAS tienen una estructura de datos "primero en entrar, primero en salir", también conocidas con acrónimo de FIFO (First in, First Out).
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
                    <span>{`Indice: ${index + 1}`}</span>
                    <span>{`Valor: ${value}`}</span>
                  </Box>
                ))}
              </Box>
            </Stack>

            <Stack component="form" 
            onSubmit={enColar} 
            spacing={2}>
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
                    cola.length >= 6 || (input >= 0 && input > 100)
                      ? true
                      : false
                  }
                >
                  Agregar numero a la cola
                </Button>
                <Button
                component="a"
                size="large"
                href="#workplace"
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
        
    )
}

export default Colas
