import React, { Component } from 'react';
import withForms from '../hoc/withForms';


class Modal extends Component {
  render() {
    console.log(this.props);
    return (
      <div />
    );
  }
}

export default withForms(Modal);
