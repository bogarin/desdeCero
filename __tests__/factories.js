'use strict'
const faker = require("faker")
const  factory = require("factory-girl").factory
const  User = require("../resources/models/user")

factory.define('User', User, {
  email: faker.internet.email(),
  password: faker.internet.password()
})

module.exports = factory;
