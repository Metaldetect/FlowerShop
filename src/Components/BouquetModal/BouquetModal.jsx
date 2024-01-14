import React, { useEffect, useState } from 'react';
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
} from './BouquetModal.styled';
import usePagination from '../PaginationUtils';

function BouquetModal({ items, bouquet, onClose }) {
  const [perPage] = useState(1);
  const { currentPage, offset, handlePageClick } = usePagination(0, perPage);

  const bouquetDetails = items.find(item => item.id === bouquet.id);
  const { title, desc, price, images } = bouquetDetails;

  const paginatedImages = images.slice(offset, offset + perPage);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const pageCount = Math.ceil(images.length / perPage);

  const handleBackdropClick = e => {
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
          paginatedImages.map((image, index) => (
            <ItemContainer key={`image_${index}`}>
              <Image src={process.env.PUBLIC_URL + image} alt={title} />
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
