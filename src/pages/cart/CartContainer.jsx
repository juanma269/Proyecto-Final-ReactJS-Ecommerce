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
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice, getTotalQuantity } =
    useContext(CartContext);
  let total = getTotalPrice();
  let cantidad = getTotalQuantity();
  const quitarDeCarrito = (id) => {
    Swal.fire({
      title: "¿Seguro que deseas eliminar este producto?",
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
      if (result.isConfirmed) {
        deleteById(id);
        Swal.fire({
          background: "#424242",
          color: "#fff",
          iconColor: "#e65100",
          title: "Producto eliminado",
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
      <Typography variant="h3" color="text.primary" textAlign="center">
        Bienvenido a tu Carrito
      </Typography>
      {cart.map((elemento) => {
        return (
          <Card
            key={elemento.id}
            sx={{
              maxWidth: 1800,
              border: "2px solid orange",
              display: "flex",
              flexDirection: "row",
              margin: "2px",
            }}
            variant="outlined"
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
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
                onClick={() => quitarDeCarrito(elemento.id)}
                style={{ marginLeft: "auto" }}
              >
                <DeleteIcon />
              </Button>
            </CardContent>
          </Card>
        );
      })}
      {cart.length == 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "6px",
            height: "700px",
            alignContent: "center",
          }}
        >
          <Typography
            variant="h3"
            color="text.primary"
            textAlign="center"
            marginTop="100px"
            marginBottom="100px"
          >
            Tu carrito está vacío
          </Typography>
          <img
            src="cartempty.png"
            alt="Carrito Vacio"
            style={{
              width: "500px",
              height: "500px",
              justifyContent: "center",
              marginBottom: "100px",
            }}
          />
        </div>
      ) : (
        <div
          style={{
            marginLeft: "6px",
            border: "1px solid orange",
            maxWidth: "500px",
          }}
        >
          <Typography gutterBottom variant="h5" component="div" margin="10px">
            Cant. Productos: {cantidad}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" margin="10px">
            Total: ${total}
          </Typography>

          <Button
            variant="outlined"
            color="secondary"
            onClick={limpiarCarrito}
            endIcon={<DeleteIcon />}
            sx={{ margin: "10px 5px" }}
          >
            Limpiar carrito
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={limpiarCarrito}
            endIcon={<ShoppingCartCheckoutOutlinedIcon />}
            sx={{ margin: "10px 5px" }}
          >
            Proceder Compra
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
