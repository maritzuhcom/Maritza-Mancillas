rm -rf /node_modules &&
npm i &&
npm i --only=dev &&
npm run build &&
sudo npm i -g forever &&
forver stopall &&
TWILIO_ACCOUNT_ID=$TWILIO_ACCOUNT_ID TWILIO_AUTH_TOKEN=$TWILIO_AUTH_TOKEN NODE_ENV=production PORT=80 forever start build/bundle.js
