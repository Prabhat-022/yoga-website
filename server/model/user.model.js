import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },

    password: {
        type: String,
        require: true
    },
    address: {
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
    userType: {
        type: String,
        enum: ["user", "admin"],
        require: true
    },
   
}, { timestamps: true });

export const User = mongoose.model("User", userSchema)