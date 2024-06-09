const express = require ("express")
const router = require("./Route/BookRoute")


const app = express ()



app.use(express.json())



// app.use(limiter)



app.use("/api/books",  router)





module.exports = app
