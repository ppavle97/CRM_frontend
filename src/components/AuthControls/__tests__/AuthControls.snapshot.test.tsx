import { render } from "@testing-library/react";
import { AuthControls } from "../AuthControls";
import { useAppDispatch } from "../../../store/hooks";

jest.mock("../../../store/hooks", () => ({
  useAppDispatch: jest.fn(),
}));

describe("AuthControls component", () => {
  it("matches snapshot", () => {
    const mockDispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

    const { asFragment } = render(<AuthControls />);

    expect(asFragment()).toMatchSnapshot();
  });
});
