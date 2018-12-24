import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'semantic-ui-react';
import validator from 'validator';
import PropTypes from 'prop-types';
import withForms from '../hoc/withForms';

class ContactPage extends Component {
  state = {
    firstName: '',
    firstNameError: null,
    lastName: '',
    lastNameError: null,
    email: '',
    emailError: null,
    message: '',
  }

  onFirstNameChange = (e) => {
    const { value } = e.target;
    this.setState({
      firstName: value,
      firstNameError: !validator.isAlpha(value),
    });
  }

  onLastNameChange = (e) => {
    const { value } = e.target;
    this.setState({
      lastName: value,
      lastNameError: !validator.isAlpha(value),
    });
  }

  onEmailChange = (e) => {
    const { value } = e.target;
    this.setState({
      email: value,
      emailError: !validator.isEmail(value),
    });
  }

  onMessageChange = (e) => {
    const { value } = e.target;
    this.setState({
      message: value,
    });
  }

  handleSubmit = () => {
    const { submitContactForm } = this.props;
    submitContactForm(this.state);
  }

  render() {
    const {
      firstName, firstNameError, lastNameError, emailError, lastName, email, message,
    } = this.state;

    const { contactFormStatus } = this.props;
    const isLoading = contactFormStatus === 'loading';
    return (
      <FormWrapper>
        <ContactTitle>Contact me</ContactTitle>
        <Form loading={isLoading}>
          <Form.Group
            widths="equal"
          >
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-first-name"
              label="FIRST NAME"
              placeholder="First name"
              error={firstNameError}
              value={firstName}
              onChange={this.onFirstNameChange}
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              label="LAST NAME"
              placeholder="Last name"
              error={lastNameError}
              value={lastName}
              onChange={this.onLastNameChange}
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-email"
              label="EMAIL"
              placeholder="joe@schmoe.com"
              error={emailError}
              value={email}
              onChange={this.onEmailChange}
            />
          </Form.Group>
          <Form.TextArea
            label="MESSAGE"
            placeholder="Your message..."
            value={message}
            onChange={this.onMessageChange}
          />

          <Button
            type="submit"
            onClick={this.handleSubmit}
          >
            SEND
          </Button>

        </Form>
      </FormWrapper>
    );
  }
}

ContactPage.propTypes = {
  submitContactForm: PropTypes.func,
  contactFormStatus: PropTypes.object,
};

ContactPage.defaultProps = {
  submitContactForm: () => {},
  contactFormStatus: {},
};


export default withForms(ContactPage);

const FormWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 15em);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Yantramanav',sans-serif;

  & .equal.width.fields {
    width: 35em;
    height: 15em;
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
    flex-grow: 0;
  }

  & button {
    font-family: 'Yantramanav',sans-serif;
  }

  && textarea {
    resize: none;
  }
`;

const ContactTitle = styled.div`
  font-size: 34px;
  padding-bottom: 1.5em;
  display: flex;
  justify-content: center;
`;
