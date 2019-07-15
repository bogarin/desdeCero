'use estrict'
require('dotenv/config')
module.exports={
    mode: process.env.APP_NODE || 'production',
    port: process.env.PORT || 3000,
    dbname: process.env.NAME_DATABASE_NODE || 'shop',
    portdb: process.env.PORT_DOCKER_MONGODB || 27017,
    urlmongodb: process.env.MONGODB_URI || '//localhost:',
    urlapi: process.env.URL_API || '//localhost:',
    secret: process.env.SECRET_TOKEN
}
