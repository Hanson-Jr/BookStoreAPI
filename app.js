const express = require ("express")
const router = require("./Route/BookRoute")
const userRoute = require("./Route/userRoute")
const AppError = require("./utils/AppError")
const GlobalErrorHandle = require("./controllers/ErrorControl")



const app = express ()
app.use(express.json())

// app.use(limiter)

app.use("/api/v1/books",  router)
app.use("/api/v1/users", userRoute)


app.all("*", (req, res, next)=>{
  // const err = new Error (`can't find ${req.originalUrl} on this server!`);
  next(new AppError(`can't find ${req.originalUrl} on this server`, 400))
  // err.status = "fail"
  // err.statuscode = 404;
  next();
});

// app.use((err, req, res, next)=>{
//   err.statuscode = err.statuscode || 500;
//   err.status = err.status || "error";

//   res.status(err.statuscode).json({
//     status: err.status,
//     message: err. message
//   })
// })


app.use(GlobalErrorHandle)



module.exports = app
