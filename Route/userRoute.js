const express = require("express")

const UserControl = require("../controllers/userController")
const validateUser = require ("../joi validator/joiUsers")

const router = express.Router()

router.route ("/")

.get(UserControl.GetAllUser)
.post(validateUser, UserControl.CreateUser)

router.route("/:id")
.get(UserControl.GetUserById)
.patch(UserControl.UpdateUserById)
.delete(UserControl.UserDeleteById)



module.exports = router