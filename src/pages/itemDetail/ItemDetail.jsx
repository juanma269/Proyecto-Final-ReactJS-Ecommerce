import { useEffect, useState } from "react";
import { products } from "../../productsMocks";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";
import DetailProductCard from "../../common/detailProductCard/DetailProductCard";

const ItemDetail = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let productoSeleccionado = products.find((elemento) => elemento.id === +id);
    setProducto(productoSeleccionado);
  }, [id]);

  const onAdd = (cantidad) => {
    console.log(producto);
    console.log(cantidad);
  };
  return (
    <Container maxWidth="md">
      <DetailProductCard product={producto} onAdd={onAdd} />
    </Container>
  );
};

export default ItemDetail;
