import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState, ModalType } from "./modalTypes";

const initialState: ModalState = {
  modalType: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModal(state, action: PayloadAction<ModalType>) {
      state.modalType = action.payload;
    },
    resetModal(state) {
      state.modalType = null;
    },
  },
});

export const { setModal, resetModal } = modalSlice.actions;
export default modalSlice.reducer;
