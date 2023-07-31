import { useContext, useEffect, useState } from "react";
import { products } from "../../productsMocks";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import DetailProductCard from "../../common/detailProductCard/DetailProductCard";
import { CartContext } from "../../context/CartContext";

const ItemDetail = () => {
  const { addToCart } = useContext(CartContext);
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    setProducto(productoSeleccionado);
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);
  };
  return (
    <Container maxWidth="md">
      <DetailProductCard product={producto} onAdd={onAdd} />
    </Container>
  );
};

export default ItemDetail;
