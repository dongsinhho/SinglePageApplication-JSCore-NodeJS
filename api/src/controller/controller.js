const users = require("../model/model")
const bcrypt = require("bcrypt")
//const mongoose = require("mongoose")

const controller = {
    register: async (req, res) => {
        try {
            const { name, password } = req.body;
            checkUser = await users.findOne({ name: name });
            if (checkUser)
                return res.status(400).json({ msg: 'User already exists' });
            const hashPassword = await bcrypt.hash(password, 12);
            const newUser = new users({ name, hashPassword });
            await newUser.save();
            return res.status(200).json({ msg: "Register successful" });
        }
        catch (error) {
            return res.status(500).json({ msg: error.msg });
        }
    },
    login: async (req, res) => {
        try {
            const { name, password } = req.body;
            user = await users.findOne({ name: name });
            if (!user)
                return res.status(400).json({ msg: "User doesn't exists" });
            const isMatch = bcrypt.compareSync(password, user.password);
            if (!isMatch)
                return res.status(400).json({ msg: "Wrong password" })
            req.session.id = user._id;
            return res.status(200).json({ msg: "Login successful" })
        }
        catch (error) {
            return res.status(500).json({ msg: error.msg });
        }
            
    },
    logout: async (req, res) => {
        try {
            req.session.destroy(err => {
                if (err) throw err;
                res.status(200).send('User has been logged out');
            });
        }
        catch(error) {
            return res.status(500).json({ msg: error.msg });
        }
    },
    test: async (req, res) => {

    }
}

module.exports = controller;