import express from 'express'
import { googleauth, logout } from '../controllers/auth.controller.js'
import  isAuth  from '../middlewares/isAuth.js'
import { getCurrentUser } from '../controllers/user.controller.js'

const userrouter = express.Router()

userrouter.get('/current-user' , isAuth, getCurrentUser)

export default userrouter