import CartContainer from "../pages/cart/CartContainer";
import CheckOutContainer from "../pages/checkOut/CheckOutContainer";
import Dashboard from "../pages/dashboard/Dashboard";
import ItemDetail from "../pages/itemDetail/ItemDetail";
import ItemListContainer from "../pages/itemList/ItemListContainer";

export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "categories",
    path: "/category/:categoryName",
    Element: ItemListContainer,
  },
  {
    id: "cart",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "detail",
    path: "/item-detail/:id",
    Element: ItemDetail,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckOutContainer,
  },
  {
    id: "dashboard",
    path: "/dashboard",
    Element: Dashboard,
  },
];
