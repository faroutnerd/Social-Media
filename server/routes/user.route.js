import express from 'express'
import { discoverUser, followUser, getUserData, unfollowUser, updateUserData } from '../controllers/user.controller.js';
import { protect } from '../middlewares/auth.middleware.js';
import { upload } from '../configs/multer.js';

const router = express.Router();

router.get('/data', protect,  getUserData);

router.post('/update', upload.fields([{name: 'profile', maxCount:1}, {name: 'cover', maxCount: 1}]), protect, updateUserData);

router.post('/discover', protect, discoverUser);

router.post('/follow', protect, followUser);

router.post('/unfollow', protect, unfollowUser);

export default router;