class Forms {
  static CONTACT_FORM_TRIGGERED = 'CONTACT_FORM_TRIGGERED'

  static CONTACT_FORM_SUCCESS = 'CONTACT_FORM_SUCCESS'

  static CONTACT_FORM_FAIL = 'CONTACT_FORM_FAIL'

  static CONTACT_FORM_CLEAR = 'CONTACT_FORM_CLEAR'

  static submitContactForm = data => (
    dispatch,
    getState,
    axios,
  ) => {
    dispatch({
      type: Forms.CONTACT_FORM_TRIGGERED,
    });

    axios.post('/contact/', data).then(() => {
      dispatch({
        type: Forms.CONTACT_FORM_SUCCESS,
      });
    }).catch(() => {
      dispatch({
        type: Forms.CONTACT_FORM_FAIL,
      });
    });

    setTimeout(() => {
      dispatch({
        type: Forms.CONTACT_FORM_CLEAR,
      });
    }, 2000);
  }
}

export default Forms;
