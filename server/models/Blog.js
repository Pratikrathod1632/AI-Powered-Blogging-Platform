import mongoose from "mongoose";

const blogSchema=new mongoose.Schema({
    title :{type : String ,reqired :true},
    subTitle :{type : String },
    description :{type : String ,reqired :true },
    category :{type : String ,reqired :true },
    image :{type : String ,reqired :true },
    isPublished :{type : Boolean ,reqired :true },
},{timestamps: true});

const Blog=mongoose.model('blog', blogSchema)

export default Blog;