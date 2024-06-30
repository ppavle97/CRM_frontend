import { render } from "@testing-library/react";
import { Pagination } from ".."; 
import { PaginationProps } from "../types"; 

describe("Pagination component", () => {
  const defaultProps: PaginationProps = {
    currentPage: 1,
    totalPages: 5,
    onPageChange: jest.fn(),
  };

  it("renders pagination buttons correctly", () => {
    const { getByAltText } = render(<Pagination {...defaultProps} />);

    const leftArrowButton = getByAltText("left-arrow");
    expect(leftArrowButton).toBeInTheDocument();

    const rightArrowButton = getByAltText("right-arrow");
    expect(rightArrowButton).toBeInTheDocument();
  });
});
