import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";
import { useAppSelector } from "../../store/hooks";
import { SuccessAuthModal } from "./SuccessAuthModal";

export const ModalContainer = () => {
  const modalType = useAppSelector((state) => state.modal.modalType);

  if (!modalType) return null;

  switch (modalType) {
    case "login":
      return <LoginModal />;
    case "register":
      return <RegisterModal />;

    case "success_singup":
      return (
        <SuccessAuthModal
          description="You have successfully signed up!"
          type="singup"
        />
      );
    case "success_login":
      return (
        <SuccessAuthModal
          description="You have successfully logged in!"
          type="login"
        />
      );

    default:
      return null;
  }
};
