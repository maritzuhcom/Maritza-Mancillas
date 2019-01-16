rm -rf /node_modules &&
npm i &&
npm i --only=dev &&
npm run build &&
docker-compose -f ./docker-compose.prod.yml up
