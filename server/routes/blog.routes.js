import express from 'express'
import { addBlog } from '../controllers/blog.controllers.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';

const blogRouter = express.Router();

blogRouter.post("/add",upload.single('image'), auth, addBlog)

export default blogRouter;
