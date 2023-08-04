import { Button } from "@mui/material";
import { products } from "../../productsMocks";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Dashboard = () => {
  const rellenar = () => {
    products.forEach((product) => {
      let refCollection = collection(db, "products");
      addDoc(refCollection, product);
    });
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src="cloud.png"
        alt="Subir a la base"
        style={{
          width: "500px",
          height: "500px",
          justifyContent: "center",
          marginBottom: "100px",
        }}
      />
      <Button
        variant="contained"
        sx={{ margin: "20px", alignItems: "center" }}
        onClick={rellenar}
      >
        Rellenar Base de datos
      </Button>
    </div>
  );
};

export default Dashboard;
