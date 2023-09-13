"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Image from "next/image";
import Logo from "../assets/images/Logo.svg";
import { Box } from "@mui/material";

import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        flexDirection: "row",
        justifyContent: "center",
        height: "81px",
        background: (theme) => theme.palette.background.default,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 135px",
          height: "100%",
          width: "100%",
          maxWidth: 1440,
          borderBottom: "1px solid rgba(78, 84, 113, 0.2)",
        }}
      >
        <div>
          <Image alt="Logo" src={Logo} />
        </div>

        <div style={{ width: "344px", display: "flex", alignItems: "center" }}>
          <Search />
        </div>
        <Box display={"flex"} gap="20px">
          <Dropdown options={[" 🇬🇧 English", "🇵🇸 Arabic" ]} lang/>
          <Dropdown options={["💵 USD", "💶 ILS"]} lang={false}/>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
