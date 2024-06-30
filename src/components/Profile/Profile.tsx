import { logout } from "../../store/features/auth/authSlice";
import { useAppDispatch } from "../../store/hooks";
import { StyledProfile } from "./Profile.styled";

export const Profile = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledProfile>
      <p>
        Welcome <span id="user">Pavle</span>! To logout click{" "}
        <span onClick={() => dispatch(logout())} id="logout">
          here
        </span>{" "}
      </p>
    </StyledProfile>
  );
};
