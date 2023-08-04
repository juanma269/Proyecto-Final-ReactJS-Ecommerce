import { Typography } from "@mui/material";
import ProductCard from "../../common/ProductCard/productCard";

const ItemList = ({ items }) => {
  return (
    <div>
      <Typography variant="h3" align="center" margin="20px">
        Productos
      </Typography>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {items.map((elemento) => {
          return <ProductCard key={elemento.id} elemento={elemento} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
