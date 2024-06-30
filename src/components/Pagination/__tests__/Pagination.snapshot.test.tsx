import { render } from "@testing-library/react";
import { Pagination } from "..";
import { PaginationProps } from "../types";

describe("Pagination component", () => {
  const defaultProps: PaginationProps = {
    currentPage: 1,
    totalPages: 5,
    onPageChange: jest.fn(),
  };

  it("matches snapshot with default props", () => {
    const { asFragment } = render(<Pagination {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot with updated props", () => {
    const { asFragment, rerender } = render(<Pagination {...defaultProps} />);

    rerender(<Pagination {...defaultProps} currentPage={3} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
