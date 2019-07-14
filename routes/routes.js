'use estrict'
const express = require('express')
const bodyParser = require('body-parser')
const product = require('./routeProduct')
const user = require('./routeUser')
app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api',product)
app.use('/api',user)
module.exports=app