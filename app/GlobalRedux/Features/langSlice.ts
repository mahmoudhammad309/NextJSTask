"use client";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LangState {
  lang: string;
  isMenuOpen: boolean;
  langData: { [key: string]: string } | null;
}

const initialState: LangState = {
  lang: "en",
  isMenuOpen: false,
  langData: null
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang(state, action: PayloadAction<string>) {
      state.lang = action.payload
    },
    setLangData(state, action: PayloadAction<{ [key: string]: string }>) {
      state.langData = action.payload;
    },
    setIsMenuOpen(state, action: PayloadAction<boolean>) {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { changeLang, setLangData, setIsMenuOpen } = langSlice.actions;
export default langSlice.reducer;