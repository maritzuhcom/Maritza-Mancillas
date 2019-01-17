import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import Parallax from 'react-rellax';
import WorkDemos from './WorkDemos';

import homepagePic from '../../assets/homepageImage.png';
import notesApp from '../../assets/notes.png';
import orionSite from '../../assets/orion.png';
import photoApp from '../../assets/photoapp.png';
import shoppingCart from '../../assets/shoppingcart.png';


class MiddleContent extends Component {
  workContent = React.createRef();

  scrollDown = () => {
    this.workContent.current.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <MidContent>
        <Parallax speed={-3}>
          <ImgDiv />
        </Parallax>

        <IconWrapper>
          <Icon name="chevron down" size="big" onClick={this.scrollDown} />
        </IconWrapper>

        <WorkContent ref={this.workContent}>
          <Intro>
            <span>
              Hi, I'm Maritza Mancillas - a LA-based, Front End Developer,
              <br />
              <br />
              and here are a few projects I have done on my spare time.
            </span>
          </Intro>

          <Projects>
            <ProjectList>
              <WorkDemos
                text="React and Redux Shopping Cart"
                imgSrc={shoppingCart}
                link="https://maritzuhcom.github.io/shopping-cart-demo/"
              />
              <WorkDemos
                text="Vanilla JS Orion Watches"
                imgSrc={orionSite}
                link="https://orionwatch.com/"
              />
              <WorkDemos
                text="React and Redux Notes"
                imgSrc={notesApp}
                link="https://maritzuhcom.github.io/test-app/"
              />
              <WorkDemos
                text="Bootstrap Demo"
                imgSrc={photoApp}
                link="https://maritzuhcom.github.io/PhotoApp/"
              />
            </ProjectList>
          </Projects>

        </WorkContent>
      </MidContent>
    );
  }
}

export default MiddleContent;

const MidContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const ImgDiv = styled.div`
  height: calc(100vh - 5em);
  width: 100%;
  background-image: url(${homepagePic});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const IconWrapper = styled.div`
  width: 100%;
  height: 4em;
  position: absolute;
  top: calc(100vh - 9em);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 2em;

  & i {
    color: white;
    transition: color 300ms ease-in-out;
  }

  & i:hover {
    cursor: pointer;
    color: grey;
  }
`;

const WorkContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media (max-width: 300px) {
    width: 13em;
  }
`;

const Intro = styled.div`
  width: 100%;
  height: 20em;
  background-color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  z-index: 1;

    & span {
      font-size: 28px;
      display: flex;
      letter-spacing: 1px;
      color: #234345;
    }

    @media (max-width: 713px) {
      line-height: 2em;
      padding: 0 1em;
    }

    @media (max-width: 300px) {
      width: 22em;
    }
`;

const Projects = styled.div`
  width: 100%;
  height: calc(100vh - 20em);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #E7E7E7;
`;

const ProjectList = styled.div`
  width: auto;
  height: 14em;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: color 300ms ease-in-out;

`;
