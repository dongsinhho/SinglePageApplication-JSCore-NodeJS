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
            console.log(name, password);
            const hashPassword = await bcrypt.hashSync(password, 10);
            const newUser = new users({ name, password: hashPassword });
            await newUser.save();
            res.status(200).json({ msg: "Register successful" });
        }
        catch (error) {
            return res.status(500).json({ msg: error.msg });
        }
    },
    login: async (req, res) => {
        try {
            console.log(req.body);
            const { name, password } = req.body;
            user = await users.findOne({ name: name });
            if (!user)
                return res.status(400).json({ msg: "User doesn't exists" });
            const isMatch = bcrypt.compareSync(password, user.password);
            if (!isMatch)
                return res.status(400).json({ msg: "Wrong password" })
            req.session.user = user._id;
            //res.cookie(name,value,option)
            res.cookie('info', user._id, {
                httpOnly: true,
                path: "/user/info",
                maxAge: 24 * 60 * 60 * 1000,
                signed: true
            })
            
			//console.log(req.signedCookies);
			//res.append('Cookie', res.cookie)
            //append cookie to response
            console.log(req.session.user);
            return res.status(200).json({ msg: "Login successful" })
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ msg: error.msg });
        }
            
    },
    logout: async (req, res) => {
        try {
            req.session.destroy(err => {
                if (err) return res.status(500).json({ msg: err.msg });
                res.status(200).send('User has been logged out');
            });
        }
        catch(error) {
            return res.status(500).json({ msg: error.msg });
        }
    },
    test: async (req, res) => {
        console.log(req.session);
        res.status(200).json({
            sinh: 'dtrai',
            code: 'chuan'
        })
    }
}

module.exports = controller;