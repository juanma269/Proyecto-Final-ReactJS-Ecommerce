import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

const ProductCard = ({ elemento }) => {
  return (
    <Card sx={{ width: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="450"
          image={elemento.img}
          alt="producto"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {elemento.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {elemento.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/item-detail/${elemento.id}`}>
          <Button size="small" color="primary" variant="outlined">
            Ver Detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
