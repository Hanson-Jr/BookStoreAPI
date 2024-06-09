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

exports.getBookById = async (req, res)=>{
  try{
    const book = await bookmodel.findById(req.params.id);
    res.status(200).json({
      Status: "Success",
      results: book.length,
      Data:{
        book
      }
    })
  }
  catch (err){
    res.status(404).json({
      status: "fail",
      message: err
    })
  }
}

exports.UpdateById = async (req, res)=>{
  try{
    const book = await bookmodel.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
      Status: "Success",
      Data:{
        book
      }
    })
  }
  catch(err){
    res.status(404).json({
      Message: err,
      Status: "fail"
    })
  }
}

exports.deleteBookById = async (req, res)=>{
  try{
    const book = await bookmodel.findByIdAndDelete(req.params.id, req.body)
    res.status(401).json({
      Data:{
        book
      }
    })
  }
  catch(err){
    res.status(404).json({
      message: err,
      status: "fail"
    })
  }
}  


