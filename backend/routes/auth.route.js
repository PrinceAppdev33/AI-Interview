import express from 'express'
import { googleauth, logout } from '../controllers/auth.controller.js'

const authrouter = express.Router()

authrouter.post('/google' , googleauth)
authrouter.get('/logout' , logout)

export default authrouter