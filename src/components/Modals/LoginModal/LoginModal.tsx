import React, { useState } from "react";
import { ModalLayout } from "../ModalLayout";
import {
  StyledError,
  StyledModalForm,
  StyledModalHeading,
  StyledModalSubmit,
} from "../Modal.styled";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { validateLoginFields } from "./validation";
import { loginUser } from "../../../store/features/auth/authActions";
import { ModalInput } from "../../ModalInput";

export const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState("");
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.auth.error);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validationError = validateLoginFields(email, password);
    if (validationError) {
      setInputError(validationError);
    } else {
      dispatch(
        loginUser({
          email: email,
          password: password,
        })
      );
    }
  };

  return (
    <ModalLayout closeText="I don't want to Login">
      <StyledModalHeading>Welcome Back</StyledModalHeading>
      <StyledModalForm>
        <ModalInput
          state={email}
          setState={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          label="Email Address"
          type="text"
        />
        <ModalInput
          state={password}
          setState={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          label="Password"
          type="password"
        />
        {inputError && <StyledError>{inputError}</StyledError>}
        {error && <StyledError>{error}</StyledError>}

        <StyledModalSubmit onClick={onSubmit}>
          Login to your Account
        </StyledModalSubmit>
      </StyledModalForm>
    </ModalLayout>
  );
};
