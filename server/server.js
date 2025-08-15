import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware } from '@clerk/express'
import {inngest, functions} from './inngest/index.js';
import {serve} from 'inngest/express';
import connectDB from './configs/db.js';

import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'
import storyRouter from './routes/story.route.js'

const app = express();

await connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());  // Clerk Middleware -- To check every request of the user.

// Routers
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/story', storyRouter);

//Routes
app.get('/', (req, res) => res.send('Your application is running'));
app.use('/api/inngest', serve({client: inngest, functions}));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));