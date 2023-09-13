"use client";
import { useState } from "react";
import { useTranslation } from 'next-i18next';
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import { Tabs, Tab, Box } from "@mui/material";
import { MessageIcon, HeartIcon, BellIcon , PersonIcon, BagIcon} from "../assets/icons";
const NavMenu = () => {
  const [value, setValue] = useState("home");

  const lang = useSelector((state: RootState) => state.lang.lang);
  const { t } = useTranslation();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      width={"100%"}
      display="flex"
      padding={{ xs: "0 20px", lg: "0 175px" }} // Adjust padding for responsiveness
      flexDirection={{ xs: "column", sm: "row" }} 
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        sx={{
          display: "flex",
          flex: "4",
        }}
      >
        <Tab value="home" label={t("home")} />
        <Tab value="products" label={t("products")} />
        <Tab value="categories" label={t("categories")} />
        <Tab value="offers" label={t("offers")} />
        <Tab value="contactUs" label={t("contactUs")} />
        <Tab value="contactUs" label={t('app_title')} />
      </Tabs>
      <Box
        sx={{
          display: "flex",
          flex: "1",
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
