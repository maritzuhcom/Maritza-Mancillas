import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export default class FoorterComponent extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterContent>
          <span>FOLLOW</span>
          <a className="github" href="https://github.com/maritzuhcom/" title="Maritza Mancillas github" target="_blank" rel="noopener noreferrer">
            <Icon name="github" size="large" />
          </a>
          <a className="linkedin" href="https://www.linkedin.com/in/maritza-m-328363133/" title="Maritza Mancillas Linkedin" target="_blank" rel="noopener noreferrer">
            <Icon name="linkedin" size="large" />
          </a>
          <a className="facebook f" href="https://www.facebook.com/mancillas.maritza" title="Maritza Mancillas Facebook" target="_blank" rel="noopener noreferrer">
            <Icon name="facebook f" size="large" />
          </a>
          <a className="spotify" href=" https://open.spotify.com/user/maritzuhcom?si=vE-Mffb5TSC5yoG4R2bnnA" title="Maritza Mancillas Spotify" target="_blank" rel="noopener noreferrer">
            <Icon name="spotify" size="large" />
          </a>
        </FooterContent>
        <LineUnder />
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.section`
  width: 100%;
  height: 10em;
  background-color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-shrink: 0;
`;

const FooterContent = styled.div`
  width: 40em;
  height: 42%;
  display: flex;
  justify-content: center;

  & span {
    font-size: 16px;
    padding-right: 1em;
    color: #E7E7E7;
    font-weight: 900;
    letter-spacing: 1px;
  }

  & i {
    color: grey;
    transition: color 300ms ease-in-out;
    padding: 0 1em 0 1em;
  }

  & i:hover {
    cursor: pointer;
    color: #E7E7E7;
  }
;`;

const LineUnder = styled.div`
  width: 30em;
  height: 1px;
  background-color: grey;
`;
