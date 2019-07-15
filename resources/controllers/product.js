'use estrict'
const Products = require('../models/product')

function getProducts(req, res){
    Products.find({},(err,products)=>{
        if(err) res.status(404).send({message:`Problemas: ${err}`})
        res.status(200).send(products)
    })
}

function getProduct(req, res){
    let productId=req.params.productId
    Products.findById(productId, (err,product)=>{
        if(err) res.status(404).send({message:`Producto no existe`})
        res.status(200).send(product)
    })
}

function insertProduct(req,res){
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
}

function updateProduct(req,res){
    let productId = req.params.productId
    let update = req.body
    Products.findByIdAndUpdate(productId,update,(err,product)=>{
        res.status(200).send({message:'Actualización exitosa'})   
    })
}

function deleteProduct(req,res){
    let productId=req.params.productId
    Products.findById(productId, (err,product)=>{
        if(product==null)res.status(404).send({message:`Producto no existe`})
        product.remove(err =>{
            if(err) res.status(500).send({message:`Error al borrar el producto ${err}`})
            res.status(200).send({message:`El producto ha sido borrado`})
        })
    })
}

module.exports={
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,
    insertProduct
}