/* eslint no-console: 0 */
import 'babel-polyfill';
import express from 'express';
// import proxy from 'http-proxy-middleware';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import Loadable from 'react-loadable';

import config from '../config';
import htmlRenderer from './middleware/htmlRenderer';
import selfApi from './selfServer';

const app = express();
const port: number = config.devPort;

// logging
app.use('/api', morgan('tiny'));

// parsing cookies
app.use('*', cookieParser());

// route tp self api
app.use('/api', bodyParser.json());
app.use('/api', selfApi);

// let app get images and such
app.use(express.static('public'));

// react/redux rendering engine
// accept all requests and let react-router/lodable split it up
// and take it from there
app.get('*', htmlRenderer);

// serve when all the components are ready 2 go!
Loadable.preloadAll().then(() => {
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}).catch((err: Error) => {
  console.log(err);
});
