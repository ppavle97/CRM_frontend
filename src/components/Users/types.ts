import { User } from "../../store/features/user/userTypes";

export interface StyledUserItemProps {
  active?: boolean;
}

export interface UsersProps {
  users?: User[]
}
