const app = require("./app")
const dotenv = require ("dotenv")

const DataBase = require ("./database/db")
dotenv.config()

const Port = process.env.PORT

const HostName = process.env.HOSTNAME










app.listen(Port, ()=>{
  console.log(`app is running at the http://${HostName}:${Port}`)
})