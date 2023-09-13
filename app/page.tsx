"use client";

import styles from "./page.module.css";
import Navbar from "./Sections/Navbar";
import NavMenu from "./Sections/NavMenu";
import { useTranslation } from 'react-i18next'
import { useSelector } from "react-redux";
import { RootState } from "./GlobalRedux/store";
export default function Home() {
  const { t, i18n } = useTranslation()
  const lang = useSelector((state: RootState) => state.lang.lang);

  return (
    <main className={styles.main} dir={`${lang === ' 🇬🇧 English' ? 'rtl' : 'ltr'}`}>
      <Navbar />
      <NavMenu />
    </main>
  );
}
