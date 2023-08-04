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

const CheckOutContainer = () => {
  const [orderId, setOrderId] = useState("");

  const { cart, getTotalPrice } = useContext(CartContext);
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  let total = getTotalPrice();

  const handleSubmit = (evento) => {
    evento.preventDefault();
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
