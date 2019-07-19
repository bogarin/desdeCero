'use strict'
const request = require("supertest")
const app = require('../../public/app')
const factory = require('../factories')
const faker = require('faker') 

describe('Authentication',() => { 
  it("should return status 403 when not authenticated", async () => {
    const response = await request(app).get("/api/product")
    expect(response.status).toBe(403)
  })

  it("should return jwt token when authenticated", async () => {
    const response = await request(app)
      .post("/api/signin")
      .send({email: "bogarin@mi.com",password: "123456"})
    expect(response.body).toHaveProperty("token");
  })

  it("should return status 200 when sing up", async () => {
    const response = await request(app)
      .post("/api/signup")
      .send({email :faker.internet.email(),
        displayName:faker.name.findName(),
        password:faker.internet.password()})
      expect(response.body).toHaveProperty("token");
  })

  it("should return status 200 when authenticated", async () => {
    const response1 = await request(app)
      .post("/api/signin")
      .send({email: "bogarin@mi.com",password: "123456"})
    const response2 = await request(app).get("/api/product")
    .set({"Authorization" :`Bearer ${response1.body.token}`})
    expect(response2.status).toBe(200)
  })

  it("should return status 200 when ", async () => {
    const user = await factory.create("User")
    const response1 = await request(app)
    .post("/api/signin")
    .send({email: user.email,password: user.password})
  const response2 = await request(app).get("/api/product")
  .set({"Authorization" :`Bearer ${response1.body.token}`})
  expect(response2.status).toBe(200)
  })
      
})


