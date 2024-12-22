import express from 'express'
import dotenv from 'dotenv/config.js'
import { databaseConnection } from './database/databaseConnection.js';
import userRoutes from './routes/userRoutes.js'
import articleRoutes from './routes/articleRoutes.js'
import cors from 'cors'

const app = express();
const port = process.env.PORT;


//middleware
app.use(cors({
    origin:'http://localhost:5173',
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/user", userRoutes)
app.use("/api/articles", articleRoutes)

app.listen(port, () => {
    databaseConnection()
    console.log(`server is runing ${port}`)
})