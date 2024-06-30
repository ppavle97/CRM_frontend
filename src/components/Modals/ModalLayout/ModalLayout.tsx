import { ModalLayoutProps } from "./types";
import { StyledModalLayout } from "../Modal.styled";
import { resetModal } from "../../../store/features/modal/modalSlice";
import { useAppDispatch } from "../../../store/hooks";

export const ModalLayout = ({ children, closeText }: ModalLayoutProps) => {
  const dispatch = useAppDispatch();

  return (
    <StyledModalLayout onClick={() => dispatch(resetModal())}>
      <div onClick={(e: any) => e.stopPropagation()} className="content">
        {children}
      </div>
      <button onClick={() => dispatch(resetModal())} className="close-btn">
        {closeText}
      </button>
    </StyledModalLayout>
  );
};
