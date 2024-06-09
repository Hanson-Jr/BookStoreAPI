const express = require ("express")
// const bookmodel = require("../modelschema/bookModel")
const validateBook = require ("../joi validator/joiBook")
const bookControl = require("../controllers/bookController")
const limiter = require("../middleware/ratelimit")



const router = express.Router()

router.route ("/")

.post(validateBook, bookControl.createBook)
.get(limiter, bookControl.getAllBook)

router.route ("/:id")
.get(bookControl.getBookById)
.put(bookControl.UpdateById)
.delete(bookControl.deleteBookById)

module.exports = router