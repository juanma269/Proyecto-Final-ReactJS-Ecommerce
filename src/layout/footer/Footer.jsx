import { Grid } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            padding: 20,
            margin: 10,
          }}
        >
          <li style={{ marginRight: "20px" }}>Productos</li>
          <li style={{ marginRight: "20px" }}>Sobre Nosotros</li>
          <li style={{ marginRight: "20px" }}>Contacto</li>
          <li style={{ marginRight: "20px" }}>Legales</li>
        </ul>
      </Grid>
    </div>
  );
};

export default Footer;
