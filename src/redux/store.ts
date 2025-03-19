import { configureStore } from "@reduxjs/toolkit";
import { reducer as taskReducer } from "./reducer";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
