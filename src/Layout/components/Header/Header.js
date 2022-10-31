import AppleIcon from "@mui/icons-material/Apple";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../Header/Logo/logo-video.png";
import Cart from "./Cart/Cart";
import Search from "./Search/Search";
import styles from "./styles.module.scss";

const Pages = [
  {
    title: "iPhone",
    link: "/iphone",
  },
  {
    title: "Mac",
    link: "/mac",
  },
  {
    title: "iPad",
    link: "/ipad",
  },
  {
    title: "Watch",
    link: "/watch",
  },
  {
    title: "Âm thanh",
    link: "/sound",
  },
  {
    title: "Phụ kiện",
    link: "/accessory",
  },
  {
    title: "TekZone",
    link: "/",
  },
  {
    title: "TopCare",
    link: "/",
  },
];

function HeaderApp() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ background: "#101010" }} position="fixed">
      <Container className={styles.Container}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            // href="/"
            // component="a"
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
            <Link className={styles.linkHeader} to="/">
              <img className={styles.logo} src={logo} alt="logo" />
            </Link>
            <Divider
              sx={{ background: "#3b3b3b", marginLeft: "16px" }}
              orientation="vertical"
              variant="middle"
              flexItem
            />
          </Typography>
          <AppleIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
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
              {Pages.map((page) => (
                <Link key={page.title} className={styles.link} to={page.link}>
                  <MenuItem
                    className={styles.menuItem}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          {/* responsive */}

          <Typography
            variant="h5"
            noWrap
            // component="a"
            // href=""
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
            <Link className={styles.linkHeader} to="/">
              <img className={styles.logo} src={logo} alt="logo" />
            </Link>
          </Typography>

          <Box
            className={styles.boxButtonText}
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {Pages.map((page) => (
              <Link
                key={page.title}
                className={styles.linkHeader}
                to={page.link}
              >
                <Button
                  className={styles.buttonText}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.title}
                </Button>
              </Link>
            ))}
          </Box>
          <Search />
          <Cart />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderApp;
