"use client";

import styles from "../page.module.css";
import Navbar from "../Sections/Navbar";
import NavMenu from "../Sections/NavMenu";
import CategoriesSlider from "../Sections/CategoriesSlider";
import ImagesSection from "../Sections/ImagesSection";
import HeaderSlider from "../Sections/HeaderSlider";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalRedux/store";
import { getDictionary } from "../../dictionary";
import React from "react";
import { changeLang, setLangData } from "../GlobalRedux/Features/langSlice";
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';

function Home({ params }: { params: { lang: string } }) {
  const dispatch = useDispatch();
  const langData = useSelector((state: RootState) => state.lang.langData);
  const lang = useSelector((state: RootState) => state.lang.lang);
  React.useEffect(() => {
    const getLang = async () => {
      const result = await getDictionary(params.lang);
      dispatch(changeLang(params.lang));
      dispatch(setLangData(result));
    };
    getLang();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!langData) {
    return <CircularProgress />;
  }
  return (
    <main className={styles.main}>
      <Navbar />
      <NavMenu orientation={"horizontal"}/>
      <HeaderSlider />
      <CategoriesSlider />
      <ImagesSection />
    </main>
  );
}

export default Home;
