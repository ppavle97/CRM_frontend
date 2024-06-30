import { setModal } from "../../store/features/modal/modalSlice";
import { useAppDispatch } from "../../store/hooks";
import { StyledAuth } from "./AuthControls.styled";

export const AuthControls = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledAuth>
      <button onClick={() => dispatch(setModal("login"))}>Login</button>
      <button onClick={() => dispatch(setModal("register"))}>Register</button>
    </StyledAuth>
  );
};
