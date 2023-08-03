import { useState } from "react";
import Counter from "./Counter";
import Swal from "sweetalert2";

const CounterContainer = ({ stock, onAdd, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    contador < stock
      ? setContador(contador + 1)
      : Swal.fire({
          icon: "error",
          title: "Cantidad Maxima",
          text: "No puedes agregar mas productos al carrito de los que hay en stock",
          background: "#424242",
          color: "#fff",
          iconColor: "#e65100",
          confirmButtonColor: "#4caf50",
        });
  };

  const restar = () => {
    contador > 1 && setContador(contador - 1);
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

export default CounterContainer;
