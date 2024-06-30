import { ModalLayout } from "../ModalLayout";
import {
  StyledModalSuccessBtn,
  StyledModalSuccessBtnContainer,
  StyledModalSuccessDescription,
  StyledModalSuccessHeading,
} from "../Modal.styled";
import { resetModal, setModal } from "../../../store/features/modal/modalSlice";
import { SuccessAuthModalProps } from "./types";
import { useAppDispatch } from "../../../store/hooks";

export const SuccessAuthModal = ({
  description,
  type,
}: SuccessAuthModalProps) => {
  const dispatch = useAppDispatch();

  return (
    <ModalLayout>
      <StyledModalSuccessHeading>Congratulations!</StyledModalSuccessHeading>
      <StyledModalSuccessDescription>
        {description}
      </StyledModalSuccessDescription>

      {type === "login" ? (
        <StyledModalSuccessBtn onClick={() => dispatch(resetModal())}>
          OK
        </StyledModalSuccessBtn>
      ) : (
        <StyledModalSuccessBtnContainer>
          <StyledModalSuccessBtn onClick={() => dispatch(resetModal())}>
            OK
          </StyledModalSuccessBtn>
          <StyledModalSuccessBtn onClick={() => dispatch(setModal("login"))}>
            LOGIN
          </StyledModalSuccessBtn>
        </StyledModalSuccessBtnContainer>
      )}
    </ModalLayout>
  );
};
