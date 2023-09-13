"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Image from "next/image";
import Logo from "../assets/images/Logo.svg";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeLang } from "../GlobalRedux/Features/langSlice";

import Search from "../components/Search";
import Dropdown from "../components/Dropdown";
const Navbar = () => {
  const [lang, setLang] = useState("");
  const [currency, setCurrency] = useState("");
  const dispatch = useDispatch();

  const handleLangChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setLang(value);
    if(value === " 🇬🇧 English") {
      dispatch(changeLang("en"));
    }
    if(value === "🇵🇸 Arabic") {
      dispatch(changeLang("ar"));
    }
  };

  const handleCurrencyChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setCurrency(value);
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
        padding: "0 135px",
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
          <Dropdown
            options={[" 🇬🇧 English", "🇵🇸 Arabic"]}
            value={ lang }
            onChange={handleLangChange}
          />
          <Dropdown
            options={["💵 USD", "💶 ILS"]}
            value={ currency }
            onChange={handleCurrencyChange}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
