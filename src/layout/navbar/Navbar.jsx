import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink, Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElCat, setAnchorElCat] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenCatMenu = (event) => {
    setAnchorElCat(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setAnchorElCat(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleCloseCatMenu = () => {
    setAnchorElCat(null);
    setAnchorElNav(null);
  };
  return (
    <>
      <AppBar position="static" enableColorOnDark>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SmartToyIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={NavLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ROBYX
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleOpenCatMenu}>
                  <Typography textAlign="center">Categorias</Typography>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={NavLink}
                  to="/cart"
                >
                  <ShoppingCartIcon />
                </MenuItem>
              </Menu>
            </Box>
            <SmartToyIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component={NavLink}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              ROBYX
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleOpenCatMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                CATEGORIAS
              </Button>
              <Menu
                id="category-menu"
                open={Boolean(anchorElCat)}
                onClose={handleCloseCatMenu}
                anchorEl={anchorElCat}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  onClick={handleCloseCatMenu}
                  component={NavLink}
                  to="/"
                  underline="none"
                  color="inherit"
                >
                  TODOS
                </MenuItem>
                <MenuItem
                  onClick={handleCloseCatMenu}
                  component={NavLink}
                  to="/category/teclados"
                  underline="none"
                  color="inherit"
                >
                  TECLADOS
                </MenuItem>
                <MenuItem
                  onClick={handleCloseCatMenu}
                  component={NavLink}
                  to="/category/mouse"
                  underline="none"
                  color="inherit"
                >
                  MOUSE
                </MenuItem>
                <MenuItem
                  onClick={handleCloseCatMenu}
                  component={NavLink}
                  to="/category/sillas"
                  underline="none"
                  color="inherit"
                >
                  SILLAS
                </MenuItem>
                <MenuItem
                  onClick={handleCloseCatMenu}
                  component={NavLink}
                  to="/category/memorias-usb"
                  underline="none"
                  color="inherit"
                >
                  MEMORIAS USB
                </MenuItem>
              </Menu>

              <Button
                onClick={handleCloseNavMenu}
                component={NavLink}
                to="/cart"
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                }}
              >
                <ShoppingCartIcon />
              </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Opciones">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Perfil" src="../public/robix.png" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Perfil</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Cerrar Sesion</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
