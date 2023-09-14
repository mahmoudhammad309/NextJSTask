import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Image from "next/image";
import Logo from "../assets/images/Logo.svg";
import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import { useRouter } from "next/navigation";
import NavMenu from "./NavMenu";
import { setIsMenuOpen } from "../GlobalRedux/Features/langSlice";

function Navbar() {
  const lang = useSelector((state: RootState) => state.lang.lang);
  const isMenuOpen = useSelector((state: RootState) => state.lang.isMenuOpen);
  const [currency, setCurrency] = useState("💵 USD");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLangChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    if (value === " 🇬🇧 English") {
      router.push("/en");
    }
    if (value === "🇵🇸 Arabic") {
      router.push("/ar");
    }
  };

  const handleCurrencyChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setCurrency(value);
  };

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log("Opening menu");
    setAnchorElNav(event.currentTarget);
    dispatch(setIsMenuOpen(true));
    
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    dispatch(setIsMenuOpen(false));
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        flexDirection: "row",
        justifyContent: "center",
        height: "81px",
        background: (theme) => theme.palette.background.default,
        padding: { lg: "0 135px", md: "0 20px" },
      }}
      dir={`${lang === "en" ? "ltr" : "rtl"}`}
    >
      <Container
        maxWidth="xl"
        sx={{ borderBottom: "1px solid rgba(78, 84, 113, 0.2)" }}
      >
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image alt="Logo" src={Logo} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "#554AF0" }} />
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
              open={isMenuOpen}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              <Box>
                <Search />
              </Box>
              <Box display={"flex"} flexDirection={"column"} gap="20px">
                <Dropdown
                  options={[" 🇬🇧 English", "🇵🇸 Arabic"]}
                  value={lang === "en" ? " 🇬🇧 English" : "🇵🇸 Arabic"}
                  onChange={handleLangChange}
                />
                <Dropdown
                  options={["💵 USD", "💶 ILS"]}
                  value={currency}
                  onChange={handleCurrencyChange}
                />
              </Box>
              <NavMenu orientation={"vertical"}/>

            </Menu>
          </Box>




          
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Image alt="Logo" src={Logo} />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "space-around",
              },
            }}
          >
            <div
              style={{ width: "344px", display: "flex", alignItems: "center" }}
            >
              <Search />
            </div>
            <Box display={"flex"} gap="20px">
              <Dropdown
                options={[" 🇬🇧 English", "🇵🇸 Arabic"]}
                value={lang === "en" ? " 🇬🇧 English" : "🇵🇸 Arabic"}
                onChange={handleLangChange}
              />
              <Dropdown
                options={["💵 USD", "💶 ILS"]}
                value={currency}
                onChange={handleCurrencyChange}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
