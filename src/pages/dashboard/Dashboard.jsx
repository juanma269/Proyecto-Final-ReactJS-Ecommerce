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
    <div>
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
