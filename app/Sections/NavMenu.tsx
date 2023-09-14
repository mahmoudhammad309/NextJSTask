import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import { Tabs, Tab, Box } from "@mui/material";
import {
  MessageIcon,
  HeartIcon,
  BellIcon,
  PersonIcon,
  BagIcon,
} from "../assets/icons";

interface NavMenuProps {
  orientation: "horizontal" | "vertical";
}

const NavMenu: React.FC<NavMenuProps> = ({ orientation }) => {
  const [value, setValue] = useState<string>("home");
  const langData = useSelector((state: RootState) => state.lang.langData);
  const lang = useSelector((state: RootState) => state.lang.lang);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string
  ): void => {
    setValue(newValue);
  };

  return (
    <Box
      width="100%"
      padding={{ xs: "0 20px", lg: "0 175px" }}
      flexDirection={{ xs: "column", sm: "row" }}
      dir={`${lang === "en" ? "ltr" : "rtl"}`}
      sx={{ display: "flex"}}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        orientation={orientation}
        sx={{
          flex: "4",
          // display: { xs: "none", md: "flex" }
        }}
      >
        <Tab value="home" label={langData?.home} />
        <Tab value="products" label={langData?.products} />
        <Tab value="categories" label={langData?.categories} />
        <Tab value="offers" label={langData?.offers} />
        <Tab value="contactUs" label={langData?.contactUs} />
      </Tabs>
      <Box
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <MessageIcon />
        <HeartIcon />
        <BellIcon />
        <PersonIcon />
        <BagIcon />
      </Box>
    </Box>
  );
};

export default NavMenu;
