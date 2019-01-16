rm -rf /node_modules &&
npm i &&
npm i --only=dev &&
npm run build &&
sudo npm i -g forever &&
forever stopall &&
TWILIO_ACCOUNT_ID=$TWILIO_ACCOUNT_ID TWILIO_AUTH_TOKEN=$TWILIO_AUTH_TOKEN PORT=80 node build/bundle.js
