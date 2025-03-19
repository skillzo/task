import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

type ThemeState = "light" | "dark";

const initialState: { theme: ThemeState } = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

const persistConfig = {
  key: "theme",
  storage,
};

export const persistedThemeReducer = persistReducer(
  persistConfig,
  themeSlice.reducer
);

export const { toggleTheme } = themeSlice.actions;
