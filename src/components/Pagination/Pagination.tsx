import {
  PaginationContainer,
  PageButton,
  PageEllipsis,
} from "./Pagination.styled";
import { PaginationProps } from "./types";

import leftArrow from "./assets/leftArrow.svg";
import rightArrow from "./assets/rightArrow.svg";

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <PageButton
            key={i}
            isActive={i === currentPage}
            onClick={() => onPageChange(i)}
          >
            {i}
          </PageButton>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push(<PageEllipsis key={`ellipsis-${i}`}>...</PageEllipsis>);
      }
    }
    return pages;
  };

  return (
    <PaginationContainer>
      <PageButton
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <img src={leftArrow} alt="left-arrow" />
      </PageButton>
      {renderPageNumbers()}
      <PageButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <img src={rightArrow} alt="right-arrow" />
      </PageButton>
    </PaginationContainer>
  );
};
