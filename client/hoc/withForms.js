import React from 'react';
import { connect } from 'react-redux';
import Forms from '../actions/forms';

const withForms = (ComposedComponent) => {
  const WithFormsWrapper = props => <ComposedComponent {...props} />;

  const mapStateToProps = ({ forms }) => ({
    contactFormStatus: forms.contactFormStatus,
  });

  const mapDispatchToProps = {
    submitContactForm: Forms.submitContactForm,
  };

  return connect(mapStateToProps, mapDispatchToProps)(WithFormsWrapper);
};


export default withForms;
