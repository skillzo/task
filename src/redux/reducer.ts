import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../types/globalTypes";

const initialState: Task[] = [];

const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      return state;
    },
    updateTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.title = title;
        task.description = description;
      }
      return state;
    },
    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      return state.filter((task) => task.id !== id);
    },
    toggleStatus: (
      state,
      action: PayloadAction<{
        id: string;
        status: "todo" | "in-progress" | "done";
      }>
    ) => {
      const { id, status } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.status = status;
      }
      return state;
    },
  },
});

export const selectTask = (state: Task) => state;
export const reducer = taskReducer.reducer;
export const { addTask, updateTask, deleteTask } = taskReducer.actions;
