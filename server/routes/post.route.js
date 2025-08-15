import express from 'express'
import { protect } from '../middlewares/auth.middleware.js';
import { upload } from '../configs/multer.js';
import { 
    addPost, 
    getFeedPosts, 
    likePost } from '../controllers/post.controller.js';

const router = express.Router();

router.post('/add', upload.array('images', 4) , protect, addPost);

router.get('/feed', protect, getFeedPosts);

router.post('/like', protect, likePost);

export default router;