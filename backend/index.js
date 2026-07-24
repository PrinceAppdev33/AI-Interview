import express, { json } from 'express'
import dotenv from 'dotenv'
import connectDb from './config/connectDB.js'
import cookieParser from 'cookie-parser'
import authrouter from './routes/auth.route.js'
import cors from 'cors'
import userrouter from './routes/user.route.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 6000

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authrouter)
app.use('/api/user', userrouter)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDb() 
})