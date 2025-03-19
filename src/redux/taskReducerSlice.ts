import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/globalTypes";
import { initoalTasks } from "../data/iinitailData";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState: Task[] = initoalTasks;

const taskReducer = createSlice({
  name: "task",
  initialState: {
    task: initialState,
  },
  reducers: {
    addTask: (state, action) => {
      state.task.push(action.payload);
      return state;
    },
    updateTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.task.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
      return state;
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.task = state.task.filter((task) => task.id !== action.payload.id);
    },
    reorderTasks: (
      state,
      action: PayloadAction<{ fromIndex: number; toIndex: number }>
    ) => {
      const [movedTask] = state.task.splice(action.payload.fromIndex, 1);
      state.task.splice(action.payload.toIndex, 0, movedTask);
    },
    toggleStatus: (
      state,
      action: PayloadAction<{
        id: string;
        status: "todo" | "in-progress" | "done";
      }>
    ) => {
      const { id, status } = action.payload;
      const task = state.task.find((task) => task.id === id);
      if (task) {
        task.status = status;
      }
      return state;
    },
  },
});

const persistConfig = {
  key: "task",
  storage,
};

export const persistedTaskReducer = persistReducer(
  persistConfig,
  taskReducer.reducer
);

export const taskReducerSlice = taskReducer.reducer;

export const { addTask, updateTask, deleteTask, toggleStatus, reorderTasks } =
  taskReducer.actions;
