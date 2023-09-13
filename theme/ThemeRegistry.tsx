"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Poppins } from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const themeOptions: ThemeOptions = {
  typography: {
    fontSize: 16,
    fontFamily: poppins.style.fontFamily,
  },
  palette: {
    background: {
      default: "#fff",
    },
    primary: {
      main: "#554AF0",
      dark: "#151875",
    },
    text: {
      primary: "#121212",
      secondary: "#707070",
    },
  },
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
