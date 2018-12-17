import express from 'express';
import sendFormDataText from './controllers/twilio/main';

const router = express.Router();

// requests POST going to /api/contact handled by sendFormDataText
router.post('/contact', sendFormDataText);

export default router;
