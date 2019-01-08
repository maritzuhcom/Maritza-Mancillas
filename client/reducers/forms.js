import Forms from '../actions/forms';

const defaultState = {
  contactFormStatus: null, // null -> nothing 'loading', 'submitted'
  message: '',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case Forms.CONTACT_FORM_TRIGGERED: { // from actions/Forms
      return {
        ...state,
        contactFormStatus: 'loading', // show loader on form
      };
    }

    case Forms.CONTACT_FORM_SUCCESS: {
      return {
        ...state,
        contactFormStatus: 'submitted', // show "submitted" modal
        message: action.payload,
      };
    }

    case Forms.CONTACT_FORM_FAIL: {
      return {
        ...state,
        contactFormStatus: 'error', // show "error" modal
        message: action.payload,
      };
    }

    case Forms.CONTACT_FORM_CLEAR: {
      return {
        ...defaultState, // normal
      };
    }

    default: {
      return { ...state };
    }
  }
};
