import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Counter = ({ contador, sumar, restar, onAdd }) => {
  const handleMouseDownQuantity = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        height: 90,
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
        xl={12}
        display={"flex"}
        justifyContent="space-evenly"
        alignItems={"center"}
      >
        <FormControl sx={{ m: 1, width: "20ch" }} variant="outlined">
          <InputLabel htmlFor="quantity">Cantidad</InputLabel>
          <OutlinedInput
            id="quantity"
            label="Cantidad"
            value={contador}
            sx={{
              m: 1,
              width: "150px",
              input: { textAlign: "center" },
            }}
            startAdornment={
              <InputAdornment position="start">
                <IconButton
                  onClick={restar}
                  onMouseDown={handleMouseDownQuantity}
                  edge="start"
                  color="primary"
                >
                  <RemoveIcon />
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={sumar}
                  onMouseDown={handleMouseDownQuantity}
                  edge="end"
                  color="primary"
                >
                  <AddIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <Button
          onClick={() => onAdd(contador)}
          variant="outlined"
          color="primary"
          endIcon={<AddShoppingCartIcon />}
        >
          Agregar al carrito
        </Button>
      </Grid>
    </Box>
  );
};

export default Counter;
