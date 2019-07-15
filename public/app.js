'use estrict'
const config = require('../config/env')
const mongoose = require('mongoose')
const app = require('../routes/routes')

if(config.mode != 'develop'){
    mongoose.connect(config.urlmongodb,{ useNewUrlParser: true })
    .then(db => console.log('connect'))
    .catch(err=> console.log(`No conecto ${err}`))
    app.listen(config.port)
}else{
    mongoose.connect(`mongodb:${config.urlmongodb}${config.portdb}/${config.dbname}`,{useNewUrlParser: true},(err,res)=>{
        if(err) {
            return console.log(`Error al conectarse ${err}`)
        }
        console.log('Conexion exitosa....')
        app.listen(config.port,()=>{
            console.log(`Trabajando en el purto:${config.port}`)
            console.log(`http:${config.urlapi}${config.port}`)
            console.log(`trabajando enla base de datos: ${config.dbname}`)
        })
    })
}

