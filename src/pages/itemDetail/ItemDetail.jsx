import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import DetailProductCard from "../../common/detailProductCard/DetailProductCard";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetail = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then((res) => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);

    Swal.fire({
      position: "center",
      background: "#424242",
      color: "#fff",
      icon: "success",
      iconColor: "#e65100",
      title: "Añadido al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <Container maxWidth="md">
      <DetailProductCard
        product={producto}
        onAdd={onAdd}
        initial={totalQuantity}
      />
    </Container>
  );
};

export default ItemDetail;
