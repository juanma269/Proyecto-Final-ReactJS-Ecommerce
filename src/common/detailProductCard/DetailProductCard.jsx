import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import CounterContainer from "../counter/CounterContainer";

const DetailProductCard = ({ product, onAdd, initial }) => {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Grid item xs={4} sm={4} md={8} xl={12}>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {"$" + product.price}
          </Typography>
          <img src={product.img} width="100%"></img>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </Grid>
      </CardContent>
      {typeof initial !== "undefined" && initial === product.stock && (
        <CardActions>
          <Typography variant="h5" color="yellow">
            ⓘ Ya tienes la cantidad maxima en tu carrito ⓘ
          </Typography>
        </CardActions>
      )}
      {(typeof initial === "undefined" || product.stock > initial) &&
        product.stock > 0 && (
          <CardActions>
            <CounterContainer stock={product.stock} onAdd={onAdd} />
          </CardActions>
        )}
      {product.stock === 0 && (
        <CardActions>
          <Typography variant="h5" color="error">
            ⓘ No hay stock disponible para este producto ⓘ
          </Typography>
        </CardActions>
      )}
    </Card>
  );
};

export default DetailProductCard;
