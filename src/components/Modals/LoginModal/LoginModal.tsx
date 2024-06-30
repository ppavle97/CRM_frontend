import { StyledModalHeading } from "../Modal.styled";
import { ModalLayout } from "../ModalLayout";

export const LoginModal = () => {
  return (
    <ModalLayout closeText="I don't want to Login">
      <StyledModalHeading>Welcome Back</StyledModalHeading>
      <p>Hello from Login modal</p>
    </ModalLayout>
  );
};
