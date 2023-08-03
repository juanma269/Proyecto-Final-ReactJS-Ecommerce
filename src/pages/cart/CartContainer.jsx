import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/material";
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
          <div key={elemento.id} style={{ border: "2px solid orange" }}>
            <h4>{elemento.title}</h4>
            <h5>{elemento.price}</h5>
            <h6>{elemento.quantity}</h6>
            <Button
              variant="outlined"
              color="error"
              onClick={() => deleteById(elemento.id)}
            >
              <DeleteIcon />
            </Button>
          </div>
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
