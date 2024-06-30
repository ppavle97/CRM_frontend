import { useState } from "react";
import { ModalInput } from "../../ModalInput";
import {
  StyledModalForm,
  StyledModalHeading,
  StyledError,
  StyledModalSubmit,
} from "../Modal.styled";
import { ModalLayout } from "../ModalLayout";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { validateRegisterFields } from "./validation";
import { signupUser } from "../../../store/features/auth/authActions";

export const RegisterModal = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputError, setInputError] = useState("");
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.auth.error);

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validationError = validateRegisterFields(email, password, fullName);
    if (validationError) {
      setInputError(validationError);
    } else {
      dispatch(
        signupUser({
          fullName: fullName,
          email: email,
          password: password,
        })
      );
    }
  };
  return (
    <ModalLayout closeText="I don't want to register">
      <StyledModalHeading>Create an Account</StyledModalHeading>
      <StyledModalForm>
        <ModalInput
          state={fullName}
          setState={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFullName(e.target.value)
          }
          label="Full Name"
          type="text"
        />

        <ModalInput
          state={email}
          setState={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          label="Email"
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

        <StyledModalSubmit onClick={onSubmit}>Create Account</StyledModalSubmit>
      </StyledModalForm>
    </ModalLayout>
  );
};
