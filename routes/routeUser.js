'use estrict'
const userCtrl = require('../resources/controllers/user')
const express = require('express')
const api = express.Router()
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
module.exports=api