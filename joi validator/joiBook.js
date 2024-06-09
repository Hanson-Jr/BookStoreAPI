const joi = require ("joi")

// const validateBook = (res, req, next)=>{
 
//   try{
//     const validateBook = req.body
//   }


//   catch(error){
//     return res.status(400)
//     .send(error.details[0].message)
//   }
// }

const validateBook = (req, res, next)=>{
  const { error} =bookSchema.validate (req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};


const bookSchema = joi.object({
  title: joi.string ()
  .min (5)
  .max(255)
  .required(),

  Description: joi.string()
  .min(5)
  .max(2550)
  .required(),

  year: joi.number()
  .min(1900)
  .max(2022)
  .required(),

  isbn: joi.string()
  .min(10)
  .max(13)
  .required(),

  price: joi.number()
  .min (0)
  .required(),

  CreateAt: joi.date()
  .default(Date.now()),

  LastUpdateAt: joi.date()
  .default(Date.now())

})

module.exports = validateBook
