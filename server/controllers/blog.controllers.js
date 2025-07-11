import fs from 'fs'
import imagekit from '../configs/imagekit.js';
import Blog from '../models/Blog.js';

export const addBlog= async (req,res) => {

    try {
        const {title, subTitle, description, category, isPublished}=JSON.parse(req.body.blog)

        const imageFile=req.file;

        //check if all fields are present
        if(!title || !subTitle || !description || !category || !isPublished){
            return res.json({success:false, message: "Missing required fields"})
        }

        const fileBuffer = fs.readFileSync(imageFile.path) //convert file in buffer

        //Upload Image to ImageKit
        const response = await imagekit.upload({
            file : fileBuffer,
            fileName :imageFile.originalname,
            folder:"/blogs"
        })

        //optimization through imagekit URL transformation

        const optimizedImageUrl = imagekit.url({
            path : response.filePath, 
            transformation : [
                {quality : 'auto'}, // auto take less size of file and image quality will be good
                {format: 'webp'} ,//convert image in this modern format
                {width:'1280'} //Width resizing
            ]
        });

        const image=optimizedImageUrl;

        await Blog.create({title, subTitle, description, category, image, isPublished})

        res.json({success:true, message: "Blog Added Successfully"})


    } catch (error) {

        res.json({success:false, message: error.message})
        
    }
    
}