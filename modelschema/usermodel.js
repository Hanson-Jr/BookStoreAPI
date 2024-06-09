const mongoose = require ("mongoose")

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
    lowercase: true
  },

  password:{
    type: String,
    required: [true, "Please provide a password"]
  },
  passwordConfirm:{
    type: String,
    select: false
  }
})