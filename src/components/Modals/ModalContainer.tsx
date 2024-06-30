import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";
import { useAppSelector } from "../../store/hooks";

export const ModalContainer = () => {
  const modalType = useAppSelector((state) => state.modal.modalType);

  if (!modalType) return null;

  switch (modalType) {
    case "login":
      return <LoginModal />;
    case "register":
      return <RegisterModal />;

    default:
      return null;
  }
};
