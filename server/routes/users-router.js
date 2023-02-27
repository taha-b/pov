const userRouter = require('express').Router();
const { signin, signup } = require("../controllers/user-controllers");

userRouter.route('/')
    .get((req, res) => {
        signin(req, res)
    })
    .post((req, res) => {
        signup(req, res);
    })
userRouter.route('/google')
    .get((req, res) => {
        const { name, uid, email } = req.headers
        console.log(name, email, uid)
    })
    .post((req, res) => {

    })

module.exports = userRouter;
