import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Wrapper } from './App.styled';
import { GlobalStyle } from '../GlobalStyles';
import Header from '../Components/Header';
import Main from '../Components/Main';
import Items from '../Components/Items';
import Footer from '../Components/Footer';
import Delivery from '../Components/Delivery';
import Review from '../Components/Review';

const App = () => {
  return (
    <Router>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Main />
        <Items />
        <Delivery />
        <Review />
        <Footer />
      </Wrapper>
    </Router>
  );
};

export default App;
