import { createAction } from "@reduxjs/toolkit";
import { ModalType } from "./modalTypes";

export const setModal = createAction<ModalType>("modal/setModal");
export const resetModal = createAction("modal/resetModal");
