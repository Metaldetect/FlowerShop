import { useState } from "react";

const usePagination = (initialPage, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [offset, setOffset] = useState(0);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    const newOffset = selectedPage * itemsPerPage;

    setCurrentPage(selectedPage);
    setOffset(newOffset);
  };
  return {
    currentPage,
    offset,
    handlePageClick,
  };
};

export default usePagination;
