import express from 'express';
import { getChatMessages, sendMessage, sseController } from '../controllers/message.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { upload } from '../configs/multer.js';

const router = express.Router();

router.get('/:userId', sseController);

router.post('/send', upload.single('image'), protect, sendMessage);

router.post('/chat', protect, getChatMessages);

// router.post('/recent-message')

export default router;