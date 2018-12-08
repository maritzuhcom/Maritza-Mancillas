import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectDemos = ({ text, imgSrc, link }) => (
  <ItemWrapper>
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Item>
        <ProjectTitle>{text}</ProjectTitle>
        <ProjectImg imgSrc={imgSrc} className="child" />
      </Item>
    </a>
  </ItemWrapper>
);

ProjectDemos.propTypes = {
  text: PropTypes.string,
  imgSrc: PropTypes.string,
  link: PropTypes.string,
};

ProjectDemos.defaultProps = {
  text: '',
  imgSrc: '',
  link: '',
};

export default ProjectDemos;

const ItemWrapper = styled.div`
  position: relative;
  width: 22em;
  height: 14em;
  border-bottom: 2px solid white;
  border-top: 2px solid white;
  border-left: 2px solid white;

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-cotent: center;
    align-items: center;
    background-color: rgb(172, 186, 204);
    overflow: hidden;
  }

  &:last-child {
    border-right: 2px solid white;
  }
`;

const Item = styled.div`
  font-size: 20px;
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover .child,
  &:focus .child {
    transform: scale(1.2);
  }

  &:hover .child:before,
  &:focus .child:before {
    display: block;
  }
`;

const ProjectImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imgSrc});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .5s;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    display: none;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(52, 73, 94, 0.75);
  }
`;

const ProjectTitle = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
