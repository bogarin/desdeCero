'use estrict'
require('dotenv/config')
module.exports={
    port: process.env.PORT_NODE || 3001,
    dbname: process.env.NAME_DATABASE_NODE || 'shop',
    portdb: process.env.PORT_DOCKER_MONGODB || 1717,
    urlmongodb: process.env.URL_MONGODB || '//localhost:',
    urlapi: process.env.URL_API || '//localhost:',
    secret: process.env.SECRET_TOKEN
}
