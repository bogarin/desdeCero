'use estrict'
const config = require('../config/config.js')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Products = require('../models/product.js')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



mongoose.connect(`mongodb://localhost:${config.portdb}/${config.dbname}`, {useNewUrlParser: true})
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
    let productId = req.params.productId
    let update = req.body
    Products.findByIdAndUpdate(productId,update,(err,product)=>{
        res.status(200).send({message:'Actualización exitosa'})   
    })
})


app.delete('/api/product/:productId',(req, res)=>{
    let productId=req.params.productId
    Products.findById(productId, (err,product)=>{
        if(product==null)res.status(404).send({message:`Producto no existe`})
        product.remove(err =>{
            if(err) res.status(500).send({message:`Error al borrar el producto ${err}`})
            
            res.status(200).send({message:`El producto ha sido borrado`})
        })
    })
})


app.listen(config.port,()=>{
    console.log(`Trabajando en el purto:${config.port}`)
    console.log(`http://localhost:${config.port}`)
    console.log(`trabajando enla base de datos: ${config.dbname}`)
})