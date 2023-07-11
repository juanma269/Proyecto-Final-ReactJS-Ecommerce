import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import ItemListContainer from "./pages/itemList/ItemListContainer";
import CartContainer from "./pages/cart/CartContainer";
import ItemDetail from "./pages/itemDetail/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/item-detail/:id" element={<ItemDetail />} />
        </Route>
        <Route path="*" element={<h1>PAGINA NO ENCONTRADA</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
