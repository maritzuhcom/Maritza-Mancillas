import validator from 'validator';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

const authToken = process.env.TWILIO_AUTH_TOKEN;
const accountSid = process.env.TWILIO_ACCOUNT_ID;
const client = require('twilio')(accountSid, authToken);

const sendFormDataText = (req, res) => {
  // TODO get values out of req.body and validate them
  const email = get(req, 'body.email', '');
  const firstName = get(req, 'body.firstName', '');
  const lastName = get(req, 'body.lastName', '');

  if (isEmpty(email) || !validator.isEmail(email)) {
    res.status(400).send({ message: 'email is invalid' });
    return;
  }

  if (validator.isAlphanumeric(firstName)) {
    res.status(400).send({ message: 'first name is invalid' });
    return;
  }

  if (validator.isAlphanumeric(lastName)) {
    res.status(400).send({ message: 'last name is invalid' });
  }


  const textMessage = {
    from: '+13234319877',
    body: JSON.stringify(req.body),
    to: '+18182747049',
  };

  client.messages.create(textMessage).then(() => {
    // respond ok to client
    res.status(201).send();
  }).catch((e) => {
    // send error to client
    res.status(400).send({ message: e.message });
  }).done();
};
export default sendFormDataText;
