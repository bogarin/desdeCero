require('dotenv/config')
const config={
    port: process.env.PORT_NODE || 3001,
    dbname: process.env.NAME_DATABASE_NODE || 'shop',
    portdb: process.env.PORT_DOCKER_MONGODB || 1717
}
module.exports=config