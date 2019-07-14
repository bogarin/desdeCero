'use strict'
const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('./configENV')

function createToken(user){
    const playload = {
        sub:user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    }
    return jwt.encode(playload,config.secret)
}

function decodeToken(token){
    const decoded = new Promise((resolve, reject) => {
        try {
          const payload = jwt.decode(token, config.secret)
    
          if (payload.exp <= moment().unix()) {
            reject({
              status: 401,
              message: 'El token ha expirado'
            })
          }
          resolve(payload.sub)
        } catch (err) {
          reject({
            status: 500,
            message: 'Invalid Token'
          })
        }
      })
      return decoded
}
module.exports={
    createToken,
    decodeToken
}