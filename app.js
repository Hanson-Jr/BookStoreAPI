const express = require ("express")
const router = require("./Route/BookRoute")

const app = express ()

// const route = express.Router()

app.use(express.json())



app.use("/api/books", router  )





module.exports = app
