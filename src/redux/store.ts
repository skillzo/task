import { configureStore } from "@reduxjs/toolkit";
import { persistedTaskReducer } from "./reducer";
import { persistStore } from "redux-persist";
import { reducer as modalSlice } from "./modalSlice";

export const store = configureStore({
  reducer: {
    task: persistedTaskReducer,
    modal: modalSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
