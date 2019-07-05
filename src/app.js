'use estrict'
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Products = require('../models/product.js')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



const port = process.env.PORT || 3001
const dbname = process.env.NAME_DATABASE || 'shop'

mongoose.connect(`mongodb://localhost:1717/${dbname}`, {useNewUrlParser: true})
//product
app.get('/api/product',(req, res)=>{
    Products.find({},(err,products)=>{
        if(err) res.status(404).send({message:`Problemas: ${err}`})
  
        res.status(200).send(products)
    })
})

app.get('/api/product/:productId',(req, res)=>{
    let productId=req.params.productId
    Products.findById(productId, (err,product)=>{
        if(err) res.status(404).send({message:`Producto no existe`})

        res.status(200).send(product)
    })
})

app.post('/api/product',(req, res) => {
    console.log(req.body)
    let product = new Products()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err,productStored)=>{
        if(err) res.status(500).send({message:`Error al almacenar los datos${err}`})

        res.status(200).send(productStored)
    })
})

app.put('/api/product/:productId',(req, res)=>{
    
})


app.delete('/api/product/:productId',(req, res)=>{
    
})


app.listen(port,()=>{
    console.log(`Trabajando en el purto:${port}`)
    console.log(`http://localhost:${port}`)
    console.log(`trabajando enla base de datos: ${dbname}`)
})