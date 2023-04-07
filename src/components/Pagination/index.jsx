/* eslint-disable react/prop-types */
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { PropTypes } from "prop-types";
import styles from "./pagination.module.scss";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevClick = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={styles.pagination}>
      <div
        className={`${styles.paginationButton} ${
          isFirstPage ? styles.disabled : ""
        }`}
        onClick={handlePrevClick}
        disabled={isFirstPage}
      >
        <ArrowLeft />
        <span>Previous</span>
      </div>
      <div className={styles.pageNumbers}>
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={`${styles.pageNumber} ${
              currentPage === page ? styles.active : ""
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <div
        className={`${styles.paginationButton} ${
          isLastPage ? styles.disabled : ""
        }`}
        onClick={handleNextClick}
        disabled={isLastPage}
      >
        <span>Next</span>
        <ArrowRight />
      </div>
    </div>
  );
};

PropTypes.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
