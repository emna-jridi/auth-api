const express = require ('express')
const router = express.Router()
const {login, register,getAllUsers }= require('../controllers/userController')

router.route('/users').get(getAllUsers)
router.route('/login').post(login)
router.route('/register').post(register)

module.exports = router 