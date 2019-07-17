'use strict'
const request = require("supertest")
const app = require('../../public/app')

describe('Autorizaciones',() => {
    it("Listado de Producto", async () => {
        const response = await request(app)
          .get("/api/product")
        console.log(response.body.message)
        expect(response.status).toBe(403)
      })
})


