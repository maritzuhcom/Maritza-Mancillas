import React, { Component } from 'react';
import styled from 'styled-components';
import ContactPage from '../../components/Contact';

class Home extends Component {
  render() {
    return (
      <Main>
        <ContactPage />
      </Main>

    );
  }
}

export default Home;

const Main = styled.main``;
