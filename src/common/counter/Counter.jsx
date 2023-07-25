import { Box, Button, Grid } from "@mui/material";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  return (
    <Box
      sx={{
        height: 100,
        width: 700,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        xs={4}
        sm={4}
        md={6}
        xl={8}
        display={"flex"}
        flexDirection={"row"}
        margin={5}
        justifyContent="space-evenly"
      >
        <Button onClick={sumar} variant="contained">
          sumar
        </Button>
        <h3>{contador}</h3>
        <Button onClick={restar} variant="contained">
          restar
        </Button>
        <Button
          onClick={() => onAdd(contador)}
          variant="contained"
          color="success"
        >
          Agregar al carrito
        </Button>
      </Grid>
    </Box>
  );
};

export default Counter;
