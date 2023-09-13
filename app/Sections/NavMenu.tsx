"use client";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";

const NavMenu = () => {
  const lang = useSelector((state: RootState) => state.lang.lang);
  const { t } = useTranslation();

  return (
    <>
    <p> {t("test")}</p>
    <p> lang:{lang}</p>
    </>
  );
};

export default NavMenu;
