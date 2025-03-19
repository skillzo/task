import { configureStore } from "@reduxjs/toolkit";
import { persistedTaskReducer } from "./taskReducerSlice";
import { persistStore } from "redux-persist";
import { reducer as modalSlice } from "./modalSlice";
import { persistedThemeReducer } from "./themeSlice";

export const store = configureStore({
  reducer: {
    task: persistedTaskReducer,
    modal: modalSlice,
    theme: persistedThemeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
