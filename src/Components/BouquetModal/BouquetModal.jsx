import { useEffect, useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ItemContainer,
  Image,
  StyledPagination,
  Title,
  Description,
  Price,
  CloseButton,
} from "./BouquetModal.styled";
import usePagination from "../PaginationUtils";

function BouquetModal({ items, bouquet, onClose }) {
  const [perPage] = useState(1);
  const { currentPage, offset, handlePageClick } = usePagination(0, perPage);

  const bouquetDetails = items.find((item) => item.id === bouquet.id);

  const images = Array.from({ length: 15 }, (_, index) => ({
    id: index,
    src: `/images/rose-bouquets/bouquet${index + 1}.jpeg`,
  }));

  const paginatedItems = images.slice(offset, offset + perPage);

  const { title, desc, price } = bouquetDetails;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const pageCount =
    !isNaN(items.length) && !isNaN(perPage)
      ? Math.ceil(items.length / perPage)
      : 0;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContent>
        <Title>{title}</Title>
        <Description>{desc}</Description>

        {currentPage !== undefined &&
          offset !== undefined &&
          paginatedItems.map((item) => (
            <ItemContainer key={`item_${item.id}`}>
              <Image src={item.src} alt={title} />
            </ItemContainer>
          ))}
        <Price>Ціна: {price}</Price>

        <StyledPagination
          count={pageCount}
          page={currentPage + 1}
          onChange={(event, value) => handlePageClick({ selected: value - 1 })}
        />

        <CloseButton onClick={onClose}>Закрити</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
}

export default BouquetModal;
