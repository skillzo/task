import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IModalState } from "../types/globalTypes";

const initialState: IModalState = {
  modalType: null,
  modalProps: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (
      state,
      action: PayloadAction<{ modalType: string; modalProps?: any }>
    ) => {
      state.modalType = action.payload.modalType;
      state.modalProps = action.payload.modalProps || {};
    },
    closeModal: (state) => {
      state.modalType = null;
      state.modalProps = {};
    },
  },
});

export const reducer = modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;

// ADD_TASK
// EDIT_TASK
