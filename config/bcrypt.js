'use strict'
const bcrypt = require('bcrypt-nodejs')

function getBcrypt(user,next){
    bcrypt.genSalt(10,(err,salt)=>{
        if(err) return next(err)
        bcrypt.hash(user.password,salt,null,(err,hash)=>{
            if(err) return next(err)
            user.password = hash
            next()
        })
    })
}

module.exports=getBcrypt