import { render } from "@testing-library/react";
import { ModalInput } from "..";
import { ModalInputProps } from "../types";

describe("ModalInput component", () => {
  const defaultProps: ModalInputProps = {
    label: "Username",
    state: "",
    setState: jest.fn(),
    type: "text",
  };

  it("renders label and input correctly", () => {
    const { getByText, getByPlaceholderText } = render(
      <ModalInput {...defaultProps} />
    );

    expect(getByText("Username")).toBeInTheDocument();
    expect(getByPlaceholderText("Type here...")).toBeInTheDocument();
  });

  it("updates input value when state changes", () => {
    const setStateMock = jest.fn();

    const { getByPlaceholderText, rerender } = render(
      <ModalInput {...defaultProps} setState={setStateMock} />
    );

    const inputElement = getByPlaceholderText("Type here...");

    rerender(
      <ModalInput {...defaultProps} state="test" setState={setStateMock} />
    );

    expect(inputElement).toHaveValue("test");
  });
});
