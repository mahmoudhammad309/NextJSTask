"use client";

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LangState {
  lang: string;
}

const initialState: LangState = {
  lang: "en",
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    changeLang(state, action: PayloadAction<string>) {
      state.lang = action.payload
    },
  },
});

export const { changeLang } = langSlice.actions;
export default langSlice.reducer;