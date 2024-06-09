const dotenv = require("dotenv")
const mongoose = require ("mongoose")
dotenv.config();

const DataBase = process.env.DB_LOCAL

mongoose.connect (DataBase,{
  UseNewUrlParser: true
}) 
.then (()=>{
  console.log("DB connection successfully!")
})



module.exports = DataBase