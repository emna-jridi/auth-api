require("dotenv").config();
const roles = require("../model/role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const passwordIsValid = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword);
};

const validUserType = (userType) => {
    const allowedUserTypes = [roles.CEO, roles.HR, roles.TECH_LEAD];
    return allowedUserTypes.includes(userType);
};

const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.SECRET, {
        algorithm: "HS256",
        expiresIn: 3600,
    });
};



module.exports = { passwordIsValid, validUserType, generateToken }