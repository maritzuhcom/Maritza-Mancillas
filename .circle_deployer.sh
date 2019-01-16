rm -rf /node_modules &&
npm i &&
npm i --only=dev &&
docker-compose -f ./docker-compose.prod.yml up
