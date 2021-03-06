import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './components/Header';
import FoorterComponent from './components/Footer';
// import Modal from './components/Modal';

class App extends Component {
  render() {
    const { route } = this.props;
    return (
      <Main>
        <Header />
        { renderRoutes(route.routes) }
        <FoorterComponent />
      </Main>
    );
  }
}

App.propTypes = {
  route: PropTypes.object,
};

App.defaultProps = {
  route: {},
};

export default App;

const Main = styled.main`
  min-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  background-color: #E7E7E7;
  font-family: 'Yantramanav', sans-serif;

`;
