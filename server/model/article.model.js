import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    subtitle: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    auther: {
        type: String,
        require: true
    },
    avatar: {
        type: String, // cloudinary url
        required: true,
    },
    coverImage: {
        type: String, // cloudinary url
    },
    content: {
        type: String,
        require: true
    }

}, { timestamps: true });

export const Article = mongoose.model("Article", articleSchema)