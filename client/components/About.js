import React, { Component } from 'react';
import styled from 'styled-components';

export default class AboutMe extends Component {
  render() {
    return (
      <AboutMeWrapper>
        <NameTitle>
          <span>MARITZA MANCILLAS</span>
        </NameTitle>
        <AboutMeParagraph>
          <span>
            Michael Bublé grew up dreaming of one day becoming a famous singer.
            Before selling 50 million records worldwide, winning four Grammys,
            and having four consecutive albums reach number one on the Billboard 200,
            Bublé struggled for 10 years to make his dream into a reality. After countless
            nights singing in front of little more than his family and friends, Bublé’s breakthrough
            finally came. Upon the success of his first album, his record label offered him a Rolex
            watch, which he came to see as a measurement of his hard work and dedication to reach
            his dream.
          </span>
        </AboutMeParagraph>
        <ImageWrapper />
      </AboutMeWrapper>
    );
  }
}

const AboutMeWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const NameTitle = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & span {
    width: 20em;
    font-size: 32px;
    font-family: 'Marcellus', serif;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 3px;
    padding-top: 2em;
  }
`;

const AboutMeParagraph = styled.div`
  width: 40em;
  height: 18em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & span {
    font-size: 16px;
    color: #828282;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 25px;
    font-weight: lighter;
  }
`;

const ImageWrapper = styled.div`
  width: 40em;
  height: 40em;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
