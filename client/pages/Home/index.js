import React, { Component } from 'react';
import styled from 'styled-components';
import MiddleContent from '../../components/WorkContent';


class Home extends Component {
  render() {
    return (
      <Main>
        <MiddleContent />
      </Main>
    );
  }
}

export default Home;

const Main = styled.main`
  @media (max-width: 490px) {
  }
`;
