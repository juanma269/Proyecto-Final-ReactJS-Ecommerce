import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <Link to="/cart">
      <Badge badgeContent={cart.length} color="success">
        <ShoppingCartIcon sx={{ ml: 2, color: "white", display: "block" }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
