export type ModalType =
  | "login"
  | "register"
  | "success_singup"
  | "success_login"
  | null;

export interface ModalState {
  modalType: ModalType;
}
