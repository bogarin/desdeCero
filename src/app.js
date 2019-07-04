'use estrict'
const express = require('express')
const bodyParse = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.get('/hola',(req, res)=> {
    res.send({message:'Hola Mundo'})
})

app.get('/hola/:name',(req, res)=> {
    res.send({message:`Hola ${req.params.name}`})
})

app.use(bodyParse.urlencoded({extended: false}))
app.use(bodyParse.json())

app.listen(port,()=>{
    console.log(`Trabajando en el purto:${port}`)
    console.log(`http://localhost:${port}`)
})