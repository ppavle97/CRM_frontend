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

  it("matches snapshot with default props", () => {
    const { asFragment } = render(<ModalInput {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot with updated state", () => {
    const { asFragment, rerender } = render(<ModalInput {...defaultProps} />);

    rerender(<ModalInput {...defaultProps} state="test" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
