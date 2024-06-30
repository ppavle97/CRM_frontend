import { StyledUserItem, StyledUsers } from "./Users.styled";
import { User } from "../../store/features/user/userTypes";
import { formatDate } from "./helpers";
import { UsersProps } from "./types";
import { useAppSelector } from "../../store/hooks";

export const Users = ({ users }: UsersProps) => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <StyledUsers>
      {users?.map((item: User) => (
        <StyledUserItem active={item.id === user?.id} key={item.id}>
          <p>{item.fullName}</p>
          <p>{item.email}</p>
          <p>{formatDate(item.created_at)}</p>
        </StyledUserItem>
      ))}
    </StyledUsers>
  );
};
