import ProductCard from "../../common/ProductCard/productCard";

const ItemList = ({ items }) => {
  console.log("Aca llego al presentacional los items: ", items);
  return (
    <div>
      <h1>Productos</h1>
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
