import React, { Component } from 'react';
import styled from 'styled-components';
import AboutMe from '../../components/About';

class Home extends Component {
  render() {
    return (
      <Main>
        <AboutMe />
      </Main>

    );
  }
}

export default Home;

const Main = styled.main``;
