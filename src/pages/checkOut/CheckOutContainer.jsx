import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebaseConfig";

import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckOutContainer = () => {
  const [orderId, setOrderId] = useState("");
  const navigate = useNavigate();

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let total = getTotalPrice();

  const realizarCompra = () => {
    let order = {
      buyer: data,
      items: cart,
      total,
      date: serverTimestamp(),
    };
    // CREAR LA ORDEN EN FIREBASE
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    // MODIFICAR EL STOCK EN FIREBASE DE CADA DOCUMENTO
    cart.forEach((product) => {
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      });
    });
  };

  const handleChange = (evento) => {
    setData({ ...data, [evento.target.name]: evento.target.value });
  };
  const handleSubmit = (evento) => {
    evento.preventDefault();
    Swal.fire({
      title: "¿Realizar Compra?",
      background: "#424242",
      color: "#fff",
      iconColor: "#e65100",
      icon: "question",
      showDenyButton: true,
      denyButtonColor: "#d50000",
      confirmButtonText: "SI 🛍️",
      confirmButtonColor: "#4caf50",
      denyButtonText: `NO`,
    }).then((result) => {
      if (result.isConfirmed) {
        realizarCompra();
        Swal.fire({
          background: "#424242",
          color: "#fff",
          iconColor: "#e65100",
          title: "¡Compra Realizada con exito!",
          icon: "success",
          confirmButtonColor: "#4caf50",
          confirmButtonText: "OK 🛍️",
        }).then(() => {
          clearCart();
          navigate("/");
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Typography variant="h3" marginTop="15px">
        Checkout
      </Typography>
      <Box
        sx={{ m: 5, width: "50ch", display: "flex", flexDirection: "column" }}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Nombre"
          variant="filled"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          label="Telefono"
          variant="filled"
          type="text"
          name="phone"
          onChange={handleChange}
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="filled"
          type="text"
          name="email"
          onChange={handleChange}
        />
        <Box
          sx={{
            m: 5,
            width: "50ch",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
          }}
        >
          <Button
            variant="contained"
            color="success"
            sx={{ marginRight: "10px" }}
            type="submit"
          >
            Enviar Compra
          </Button>

          <Button
            variant="contained"
            color="error"
            sx={{ marginLeft: "100px" }}
          >
            Cancelar
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CheckOutContainer;
