const joi = require("joi")

const validateUser= (req, res, next)=>{
  const { error} = UserSchema.validate (req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  next();
};


const UserSchema = joi.object({
  name: joi.string()
  .min (3)
  .max(25)
  .required(),

  email: joi.string ()
  .min(10)
  .max(100)
  .required(),
  
  password: joi.string()
  .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
  .min(6)
  .max(15),

  passwordConfirm: joi.ref('password')

})

module.exports = validateUser

