'use estrict'
const productCtrl= require('../resources/controllers/product')
const Auth = require('../resources/middlewares/auth')
const express = require('express')
const api = express.Router()
api.get('/product',Auth,productCtrl.getProducts)
api.get('/product/:productId',productCtrl.getProduct)
api.post('/product',Auth,productCtrl.insertProduct)
api.put('/product/:productId',Auth,productCtrl.updateProduct)
api.delete('/product/:productId',productCtrl.deleteProduct)
api.get('/private',Auth,(req, res)=>{
    res.status(200).send({message:'Tienes acceso'})
})
module.exports=api