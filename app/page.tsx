"use client";

import styles from "./page.module.css";
import Navbar from "./Sections/Navbar";
import NavMenu from "./Sections/NavMenu";
import CategoriesSlider from "./Sections/CategoriesSlider";
import ImagesSection from "./Sections/ImagesSection";
import HeaderSlider from "./Sections/HeaderSlider";
import { useTranslation } from 'react-i18next'
import { useSelector } from "react-redux";
import { RootState } from "./GlobalRedux/store";
import { useRouter } from "next/router";
import { appWithTranslation } from 'next-i18next';

function Home() {
  const lang = useSelector((state: RootState) => state.lang.lang);

  return (
    <main className={styles.main} dir={`${lang === 'en' ? 'ltr' : 'rtl'}`}>
      <Navbar />
      <NavMenu />
      <HeaderSlider />
      <CategoriesSlider />
      <ImagesSection />
    </main>
  );
}

export default appWithTranslation(Home);