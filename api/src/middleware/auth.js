//check session
const auth = (req, res, next) => {
    try {
        if(!req.session.user) 
        return res.status(300).json({ msg: "User don't login, redirect to login"})
        next();
    }
    catch (error) {
        return res.status(500).json({ msg: error.msg})
    }

} 

module.exports = auth;