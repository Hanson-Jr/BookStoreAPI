const express = require ("express")
// const bookmodel = require("../modelschema/bookModel")
const validateBook = require ("../joi validator/joiBook")
const bookControl = require("../controllers/bookController")



const router = express.Router()

router.route ("/")

.post(validateBook, bookControl.createBook)
.get(bookControl.getAllBook)

// router.route ("/:_id")
// .get(bookControl.getBookByID)

module.exports = router