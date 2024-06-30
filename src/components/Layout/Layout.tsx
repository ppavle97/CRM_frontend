import { ModalContainer } from "../Modals";
import {
  StyledHeader,
  StyledLayout,
  StyledLayoutContent,
} from "./Layout.styled";
import { LayoutProps } from "./types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayout>
      <StyledHeader>
        <p>CRM Brokerage Company</p>
      </StyledHeader>
      <StyledLayoutContent>{children}</StyledLayoutContent>
      <ModalContainer />
    </StyledLayout>
  );
};
