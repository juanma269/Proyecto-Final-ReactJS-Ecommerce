import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteById } = useContext(CartContext);
  const limpiarCarrito = () => {
    Swal.fire({
      title: "¿Seguro que deseas limpiar tu carrito?",
      background: "#424242",
      color: "#fff",
      iconColor: "#e65100",
      icon: "question",
      showDenyButton: true,
      denyButtonColor: "#d50000",
      confirmButtonText: "SI 🗑️",
      confirmButtonColor: "#4caf50",
      denyButtonText: `NO`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          background: "#424242",
          color: "#fff",
          iconColor: "#e65100",
          title: "Carrito Limpio",
          icon: "success",
          confirmButtonColor: "#4caf50",
        });
      } else if (result.isDenied) {
        Swal.fire({
          background: "#424242",
          color: "#fff",
          iconColor: "#e65100",
          title: "Sin cambios",
          icon: "info",
          confirmButtonColor: "#4caf50",
        });
      }
    });
  };

  return (
    <div>
      <h1>Bienvenido a tu Carrito</h1>
      {cart.map((elemento) => {
        return (
          <Card
            key={elemento.id}
            sx={{
              maxWidth: 1800,
              border: "2px solid orange",
              display: "flex",
              flexDirection: "row",
            }}
            variant="outlined"
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between", // Alinea los elementos al principio y al final del contenedor
                alignItems: "center", // Alinea verticalmente los elementos al centro
                width: "100%", // Ocupa todo el ancho disponible
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <CardMedia
                  component="img"
                  height="140"
                  sx={{ height: 140, width: 140 }}
                  image={elemento.img}
                  title={elemento.title}
                />
                <div style={{ marginLeft: "16px" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {elemento.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {"$" + elemento.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {"Cantidad: " + elemento.quantity}
                  </Typography>
                </div>
              </div>

              <Button
                variant="outlined"
                color="error"
                onClick={() => deleteById(elemento.id)}
                style={{ marginLeft: "auto" }} // Empuja el botón hacia la derecha
              >
                <DeleteIcon />
              </Button>
            </CardContent>
          </Card>
        );
      })}
      {cart.length == 0 ? (
        <h2>Tu carrito está vacío</h2>
      ) : (
        <Button
          variant="outlined"
          color="secondary"
          onClick={limpiarCarrito}
          endIcon={<DeleteIcon />}
        >
          Limpiar carrito
        </Button>
      )}
    </div>
  );
};

export default CartContainer;
