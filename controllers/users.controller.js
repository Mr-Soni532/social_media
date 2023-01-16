const UserModel = require("../models/user.model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();
const jwt_secret = process.env.jwtSecret;

exports.register = async (req, res) => {
    const { name, email, gender, password } = req.body;
    try {
        const user = await UserModel.find({ email });
        if (!user.length) {
            bcrypt.hash(password, 10, async (err, hash) => {
                if (err) res.json({ err });
                let newUser = new UserModel({ name, email, gender, password: hash })
                await  newUser.save();
                res.send('User has been created.')
            })
        } else {
            res.send('Already have an account.')
        }
    } catch (error) {
        res.json({ Error: error.message })
    }
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.find({ email });
        if (user.length) {
             bcrypt.compare(password, user[0].password, async(err, result) => {
                if (err) res.json({ err: err.message })
                if (result) {
                    const token = jwt.sign(user[0].id, jwt_secret);
                    res.json({ token })
                } else {
                    res.status(400).json({ err: 'user not found!' })
                }
            })
        }else {
            res.send('user not fount')
        }
    } catch (error) {
        res.status(500).json({ err: error.message })
    }
}