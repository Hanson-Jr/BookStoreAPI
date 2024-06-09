const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  year:{
    type: Number,
    required: true,
    max: [2022, "Year must be less than or equal to 2020"]
  },
isbn:{
  type: String,
  required: true,
  unique: [true, "ISBN must be unique"]
},

price:{
  type: Number,
  required: true,
  min: [0, "Price must be a greater than equal to 0"]
},
CreatedAt: Date

})

const bookmodel = mongoose.model ("bookmodel", bookSchema)

module.exports = bookmodel