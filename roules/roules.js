'use estrict'
const express = require('express')
const bodyParser = require('body-parser')
const api = require('./rouleProduct')
app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api',api)
module.exports=app