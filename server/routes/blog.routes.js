import express from 'express'
import { addBlog, addComment, deleteBlogById, generateContent, getAllBlogs, getBlogById, getBlogComment, togglePublish } from '../controllers/blog.controllers.js';
import upload from '../middlewares/multer.js';
import auth from '../middlewares/auth.js';

const blogRouter = express.Router();

blogRouter.post("/add",upload.single('image'), auth, addBlog)
blogRouter.get('/all',getAllBlogs) //display all blogs
blogRouter.get('/:blogId',getBlogById)
blogRouter.post('/delete',auth,deleteBlogById) //auth is used because only admin can delete this blog

blogRouter.post('/toggle-publish',auth,togglePublish) //switch to publish and unpublish

//comments section
blogRouter.post('/add-comment',addComment)
blogRouter.post('/comment',getBlogComment)

// Gemini AI for AI Description
blogRouter.post('/generate',auth, generateContent)



export default blogRouter;
