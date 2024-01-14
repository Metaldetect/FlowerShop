import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import {
  ItemsBox,
  ItemContainer,
  Image,
  Title,
  StyledPagination,
} from './Items.styled';
import BouquetModal from '../BouquetModal';
import usePagination from '../PaginationUtils';
import axios from 'axios';

function PaginatedItems() {
  const [items, setItems] = useState([]);
  const [perPage] = useState(3);
  const { currentPage, offset, handlePageClick } = usePagination(0, perPage);
  const [selectedBouquet, setSelectedBouquet] = useState(null);

  useEffect(() => {
    axios
      .get('/data/items.json')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error loading items:', error);
      });
  }, []);

  const handleBouquetClick = bouquet => {
    setSelectedBouquet(bouquet);
  };

  const handleCloseModal = () => {
    setSelectedBouquet(null);
  };

  const paginatedItems = items.slice(offset, offset + perPage).map(item => (
    <ItemContainer key={item.id} onClick={() => handleBouquetClick(item)}>
      <Image src={item.img} alt={item.title} />
      <p>{item.desc}</p>
      <b>{item.price}</b>
    </ItemContainer>
  ));

  const pageCount =
    !isNaN(items.length) && !isNaN(perPage)
      ? Math.ceil(items.length / perPage)
      : 0;

  return (
    <Element name="букети">
      <Title>Букети</Title>
      <ItemsBox>{paginatedItems}</ItemsBox>
      <StyledPagination
        count={pageCount}
        page={currentPage + 1}
        onChange={(event, value) => handlePageClick({ selected: value - 1 })}
      />
      {selectedBouquet && (
        <BouquetModal
          items={items}
          bouquet={selectedBouquet}
          onClose={handleCloseModal}
        />
      )}
    </Element>
  );
}

export default PaginatedItems;
