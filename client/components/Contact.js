import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Button } from 'semantic-ui-react';
import withForms from '../hoc/withForms';

class ContactPage extends Component {
  render() {
    console.log(this.props);
    return (
      <FormWrapper>
        <Form>
          <ContactTitle>Send me a text or email</ContactTitle>

          <Form.Group widths="equal">
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-first-name"
              label="First name"
              placeholder="First name"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-last-name"
              label="Last name"
              placeholder="Last name"
            />
            <Form.Input
              fluid
              id="form-subcomponent-shorthand-input-email"
              label="Email"
              placeholder="joe@schmoe.com"
            />
          </Form.Group>
          <Form.TextArea label="Message" placeholder="Message..." />

          <Button type="submit">Send Email</Button>
          <Button type="submit">Send Text</Button>

        </Form>
      </FormWrapper>
    );
  }
}

export default withForms(ContactPage);

const FormWrapper = styled.section`
  width: 100%;
  height: calc(100vh - 5em);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Marcellus', serif;

    & .equal.width.fields {
      width: 20em;
      height: 30em;
      display: flex;
      align-items: stretch;
      justify-content: center;
      flex-direction: column;
      flex-grow: 0;

    }
`;

const ContactTitle = styled.div`
  font-size: 25px;
  padding-bottom: 1.5em;
`;
