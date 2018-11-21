import React, { Component } from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

class Loading extends Component {
  static defaultProps = {
    isLoading: true,
    pastDelay: false,
    timedOut: true,
    error: null,
    retry: () => {},
  };

  render() {
    return (
      <LoadingSegment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      </LoadingSegment>
    );
  }
}

export default Loading;

const LoadingSegment = styled(Segment)`
  &&& {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    background-color: black;
   }
`;
