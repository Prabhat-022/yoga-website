import mongoose from "mongoose";

export const databaseConnection = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log('mongodb connected')
        }).catch((error) => {
            console.log('db not connected')
        });

} 
