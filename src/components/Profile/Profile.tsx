import { useEffect } from "react";
import { logout } from "../../store/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { StyledProfile } from "./Profile.styled";
import { fetchCurrentUser } from "../../store/features/auth/authActions";

export const Profile = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const user = useAppSelector((state) => state.auth.user);
  const loading = useAppSelector((state) => state.auth.loading);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <StyledProfile>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>
          Welcome <span id="user">{user?.fullName}</span>! To logout click{" "}
          <span onClick={() => dispatch(logout())} id="logout">
            here
          </span>{" "}
        </p>
      )}
    </StyledProfile>
  );
};
