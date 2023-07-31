import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "@mui/material";

const CartContainer = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h1>Esto es el carritoo</h1>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h4>{elemento.title}</h4>
            <h5>{elemento.price}</h5>
            <h6>{elemento.quantity}</h6>
          </div>
        );
      })}

      <Button onClick={clearCart} color="secondary" variant="contained">
        Limpiar carrito
      </Button>
    </div>
  );
};

export default CartContainer;
