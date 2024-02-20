require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../model/userModel")
const bcrypt = require('bcryptjs')


const config = {
  secret: 'c0318d7c6c023ead5e5c394312561e347fb4501856b9da9b563ed4786a0c8d8a7e0d026d9f6fd3dcabb99917dfc7b6c00fcfcdb664ab9d6702e9202f373dcdfa'
};

const getAllUsers = async (req, res) => {
  const users = await User.find({})
  res.status(200).json({ users })
}


const login = async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password
  })

  if (!user.email || !user.password) {
    return res.status(400).json({ message: "Please provide an email and password !" });
  }

  try {
    const foundUser = await User.findOne({ email: req.body.email });
    if (!foundUser) {
      return res.status(401).json({ message: "user does not exist." });
    }

    var passwordIsValid = bcrypt.compareSync(
      req.body.password,
      foundUser.password
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }
    const token = jwt.sign({ id: user.id },
      config.secret,
      {
        algorithm: 'HS256',

        expiresIn: 3600,
      });
    res.status(200).json({ message: "User logged in successfully.", accessToken: token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error during the authentication." });
  }

};


// function generateAccessToken(user) {
//   return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30d' });
// }

const register = async (req, res) => {
  const user = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
  const foundUser = await User.findOne({ email: req.body.email });
  if (foundUser) {
    return res.status(401).json({ message: "User already exists." });
  }
  try {
    await user.save();
    res.status(200).send({ message: 'User was registered successfully!' });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}



module.exports = { login, register, getAllUsers }


