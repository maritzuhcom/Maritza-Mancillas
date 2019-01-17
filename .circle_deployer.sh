rm -rf /node_modules
npm i
npm i --only=dev
npm run build
export TWILIO_AUTH_TOKEN=${TWILIO_AUTH_TOKEN} &&
export TWILIO_ACCOUNT_ID=${TWILIO_ACCOUNT_ID} &&
docker-compose -f docker-compose.prod.yml up -d
