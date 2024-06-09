const bookmodel = require("../modelschema/bookModel")
// const validateBook = require ("../joi validator/joiBook")

exports.createBook = async (req, res)=>{
  try{
    const Newbook = await bookmodel.create(req.body);
    res.status(201).json({
      Status: "Success",
      Data:{
        book: Newbook
      }
     
    })
      }
  catch(err){
    res.status(400).json({
      status: "fail",
      message: err
    })
  }
}

exports.getAllBook = async (req, res)=>{
  try{
  const book = await bookmodel.find()
  
  res.status(200).json({
    Status: "Success",
    results: book.length,
    Data:{
      book
    }
  })
}
catch(err){
  res.status(404).json({
    status: "fail",
    message: err
  })
}
}





