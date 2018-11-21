import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';

class App extends Component {
  render() {
    const { route } = this.props;
    return (
      <Main>
        <header>
          I am in every route
        </header>
        { renderRoutes(route.routes) }
      </Main>
    );
  }
}

export default App;

const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
