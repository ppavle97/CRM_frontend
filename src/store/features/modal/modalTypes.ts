export type ModalType =
  | "login"
  | "register"
  | null;

export interface ModalState {
  modalType: ModalType;
}
