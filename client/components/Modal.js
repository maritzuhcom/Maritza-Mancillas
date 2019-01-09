import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import withForms from '../hoc/withForms';

class ModalComponent extends Component {
  render() {
    const { contactFormStatus, message } = this.props;

    const hasError = contactFormStatus === 'error';
    const hasSubmitted = contactFormStatus === 'submitted';

    return (
      <Modal open={hasError || hasSubmitted} dimmer="blurring" basic>
        <Modal.Header>{hasError ? 'Error' : 'Thanks!'}</Modal.Header>
        <Modal.Content>
          <p>{message}</p>
        </Modal.Content>
      </Modal>
    );
  }
}

ModalComponent.propTypes = {
  contactFormStatus: PropTypes.func,
  message: PropTypes.object,
};

ModalComponent.defaultProps = {
  contactFormStatus: () => {},
  message: {},
};

export default withForms(ModalComponent);
