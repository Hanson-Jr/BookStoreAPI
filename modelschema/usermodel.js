const mongoose = require ("mongoose")
const validator = require ("validator")

const Userschema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [ true, "Please tell us your name"]
  },
  email:{
    type: String,
    required: [true, "please provide your email"],
    unique: true,
    lowercase: true,
    validate: [ validator.isEmail, 'please provide a valid email']
  },

  photo: String,

  password:{
    type: String,
    required: [true, "Please provide a password"]
  },
  passwordConfirm:{
    type: String,
    select: false
  }
})

const Usermodel = mongoose.model ("Usermodel", Userschema)

module.exports = Usermodel