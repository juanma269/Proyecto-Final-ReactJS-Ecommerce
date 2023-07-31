import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import ItemListContainer from "./pages/itemList/ItemListContainer";
import CartContainer from "./pages/cart/CartContainer";
import ItemDetail from "./pages/itemDetail/ItemDetail";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
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
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
