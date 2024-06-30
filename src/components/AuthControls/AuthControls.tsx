import { StyledAuth } from "./AuthControls.styled";

export const AuthControls = () => {
  return (
    <StyledAuth>
      <button onClick={() => alert("Login")}>Login</button>
      <button onClick={() => alert("Register")}>Register</button>
    </StyledAuth>
  );
};
