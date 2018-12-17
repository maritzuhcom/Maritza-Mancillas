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
            Hi! I grew up in the San Fernando Valley, CA and live in Northridge.
            I like to explore new methods in development and work on creating
            new and awesome apps. I started my career during my senior year of college
            where I decided to make a simple app for my senior design project.
            I used HTML, CSS and Vanilla JS. I then decided to pursue a career in
            development. I enjoyed designing and creating user interfaces so it
            was the perfect fit. What I enjoy most is coming up with new ideas
            and executing. I keep up with the latest technologies and am always
            excited to read articles on new features for JS and CSS. What I love
            doing most when working is implementing new features. I look for tasks
            in my job that involve new features that require custome solutions.
            I am very detail oriented and like to do high quality work by looking for
            ways to be efficient and enhance designs.
            When I'm not coding, I enjoy hiking, cardio, tennis, ping pong, movies
            and music. I also like to go out with friends and explore new bars and
            restaurants.
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
  width: 45em;
  height: 30em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & span {
    font-size: 17px;
    color: #234345;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 25px;
    font-weight: 100;
  }
`;

const ImageWrapper = styled.div`
  width: 40em;
  height: 40em;
  margin-bottom: 4em;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
