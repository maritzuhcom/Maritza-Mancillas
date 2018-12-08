import express from 'express';

const router = express.Router();

router.get('/test', () => {
  console.log('made a request to myself');
});

export default router;
