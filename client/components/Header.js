import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import styled, { keyframes } from 'styled-components';
import { Popup } from 'semantic-ui-react';


class Header extends Component {
  render() {
    const PopupBasic = () => (
      <Popup
        trigger={(
          <Link to="/">
            <NameTitle id="test">
              MM
            </NameTitle>
          </Link>
        )}
        position="bottom right"
        inverted
        content="Maritza Mancillas"
        basic
      />
    );
    return (
      <MainHeader>
        <HeaderSection>
          <PopupBasic />

        </HeaderSection>

        <HeaderSection margin="0 5em 0 0">
          <Link to="/"><TitleMenuItem>WORK</TitleMenuItem></Link>
          <Link to="/about"><TitleMenuItem>ABOUT</TitleMenuItem></Link>
          <Link to="/contact"><TitleMenuItem>CONTACT</TitleMenuItem></Link>
        </HeaderSection>
      </MainHeader>
    );
  }
}

export default Header;

const MainHeader = styled.header`
  height: 5em;
  width: 100%;
  background-color: #E7E7E7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderSection = styled.section`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin: ${props => (isEmpty(props.margin) ? '0' : props.margin)}
`;

const bounceEffect = keyframes`
  0%, 20%, 60%, 100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }

  40% {
    -webkit-transform: translateY(-20px);
    transform: translateY(-20px);
  }

  80% {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
`;

const NameTitle = styled.div`
  font-family: 'Sedgwick Ave', cursive;
  font-size: 30px;
  padding-left: 4em;
  color: #234345;

  &:hover {
    animation: ${bounceEffect} 1s;
    cursor: pointer;
  }
`;

const TitleMenuItem = styled.div`
  font-size: 12.5px;
  letter-spacing: 2px;
  font-weight: 600;
  padding-right: 1em;
  height: 2em;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  color: #234345;
  transition: color 300ms ease-in-out;

  &:hover {
    cursor: pointer;
    color: grey;
  }
`;
