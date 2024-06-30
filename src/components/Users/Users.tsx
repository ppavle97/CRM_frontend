import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { StyledUserItem, StyledUsers } from "./Users.styled";
import { fetchUsers } from "../../store/features/user/userActions";
import { User } from "../../store/features/user/userTypes";
import { formatDate } from "./helpers";

export const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.user.users);
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <StyledUsers>
      {users.map((item: User) => (
        <StyledUserItem active={item.id === user?.id} key={item.id}>
          <p>{item.fullName}</p>
          <p>{item.email}</p>
          <p>{formatDate(item.created_at)}</p>
        </StyledUserItem>
      ))}
    </StyledUsers>
  );
};
