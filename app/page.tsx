"use client";

import styles from "./page.module.css";
import Navbar from "./Sections/Navbar";
import NavMenu from "./Sections/NavMenu";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <NavMenu />
    </main>
  );
}
