'use estrict'
const userCtrl = require('../controllers/user')
// const Auth = require('../middlewares/auth')
const express = require('express')
const api = express.Router()
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
module.exports=api