import { StyledModalInput } from "../Modals/Modal.styled";
import { ModalInputProps } from "./types";

export const ModalInput = ({
  label,
  state,
  setState,
  type,
}: ModalInputProps) => {
  return (
    <StyledModalInput>
      <p>{label}</p>
      <input
        value={state}
        onChange={setState}
        type={type}
        placeholder="Type here..."
      />
    </StyledModalInput>
  );
};
