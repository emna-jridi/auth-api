const express = require ('express')
const router = express.Router()
const {login, register,getAllUsers , getUserByEmail, UpdateUser,deleteUser}= require('../controllers/userController')

router.route('/users').get(getAllUsers)
router.route('/login').post(login)
router.route('/register').post(register)
router.route('/users/:email').get(getUserByEmail).patch(UpdateUser).delete(deleteUser)


module.exports = router 