const Usermodel = require ("../modelschema/usermodel")

exports. CreateUser = async (req, res)=>{
  try{
    const NewUser = await Usermodel.create(req.body)
    res.status(201).json({
      Status: "Success",
      result: NewUser.length,
      Data:{
       user: NewUser
      }
    })
  }
  catch(err){
    res.status(400).json({
      Status: "fail",
      Message: err
    })
  }
}

exports.GetAllUser = async (req, res)=>{
  try{
    const user = await Usermodel.find()
    res.status(200).json({
      Status: "Success",
      results: user.length,
      Data:{
        user:user
      }
    })
  }
  catch(err){
    res.status(404).json({
      Status: "fail",
      Message: err
    })
  }
}

exports.UpdateUserById = async (req, res)=>{
  try{
    const user = await Usermodel.findByIdAndUpdate(req.params.id, req.body);
    res.status(202).json({
      Status: "success",
      Data:{
        user
      }
    })
  }
  catch(err){
    res.status(404).json({
      Status: "Fail"
    })
  }
}


exports.GetUserById = async (req, res)=>{
  try{
    const user = await Usermodel.findById(req.params.id)
    res.status(200).json({
      Status: "Success",
      results: Usermodel.length,
      Data:{
        user
      }
    })
  }
  catch(err){
    res.status(404).json({
      Status: "fail",
      Message: err
    })
  }
}

exports. UserDeleteById = async (req, res)=>{
  try{
    const user = await Usermodel.findByIdAndDelete(req.params.id);
    res.status(402)
  }
  catch(err){
    res.status(404).json({
      Status: "fail!"
    })
  }
}