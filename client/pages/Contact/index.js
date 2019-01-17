import React, { Component } from 'react';
import styled from 'styled-components';
import ContactPage from '../../components/Contact';
import ModalComponent from '../../components/Modal';

class Home extends Component {
  render() {
    return (
      <Main>
        <ContactPage />
        <ModalComponent />
      </Main>

    );
  }
}

export default Home;

const Main = styled.main`

`;
