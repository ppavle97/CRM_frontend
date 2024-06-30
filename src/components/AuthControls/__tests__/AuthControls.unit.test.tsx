import { render, fireEvent } from "@testing-library/react";
import { AuthControls } from "../AuthControls";
import { useAppDispatch } from "../../../store/hooks";
import { setModal } from "../../../store/features/modal/modalSlice";

jest.mock("../../../store/hooks", () => ({
  useAppDispatch: jest.fn(),
}));

describe("AuthControls component", () => {
  it("renders login and register buttons", () => {
    const mockDispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { getByText } = render(<AuthControls />);

    const loginButton = getByText("Login");
    const registerButton = getByText("Register");

    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it("dispatches setModal action on button click", () => {
    const mockDispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { getByText } = render(<AuthControls />);

    fireEvent.click(getByText("Login"));
    fireEvent.click(getByText("Register"));

    expect(mockDispatch).toHaveBeenCalledWith(setModal("login"));
    expect(mockDispatch).toHaveBeenCalledWith(setModal("register"));
  });
});
