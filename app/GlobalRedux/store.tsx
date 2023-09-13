"use client";
import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import { langReducer } from "./Features";

const rootReducer = combineReducers({
  lang: langReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store: Store<RootState> = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
