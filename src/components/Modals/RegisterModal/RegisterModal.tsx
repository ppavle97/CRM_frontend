import { StyledModalHeading } from "../Modal.styled";
import { ModalLayout } from "../ModalLayout";

export const RegisterModal = () => {
  return (
    <ModalLayout closeText="I don't want to register">
      <StyledModalHeading>Create an Account</StyledModalHeading>

      <p>Hello from Register modal</p>
    </ModalLayout>
  );
};
