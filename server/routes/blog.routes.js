import express from 'express'
import { addBlog, getAllBlogs, getBlogById, togglePublish } from '../controllers/blog.controllers.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';

const blogRouter = express.Router();

blogRouter.post("/add",upload.single('image'), auth, addBlog)
blogRouter.get('/all',getAllBlogs) //display all blogs
blogRouter.get('/:blogId',getBlogById)
blogRouter.post('/delete',auth,getBlogById) //auth is used because only admin can delete this blog

blogRouter.post('/toggle-publish',auth,togglePublish) //switch to publish and unpublish


export default blogRouter;
