rm -rf /node_modules
npm i
npm i --only=dev
npm run build
source /root/.bashrc
export NODE_ENV=production
echo "****variables****"
echo $TWILIO_ACCOUNT_ID
echo $TWILIO_AUTH_TOKEN
echo "****variables****"
docker-compose -f docker-compose.prod.yml up -d
