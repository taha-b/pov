const userRouter = require('express').Router();
const { signin, signup, withGoogle } = require("../controllers/user-controllers");

userRouter.route('/')
    .get((req, res) => {
        signin(req, res)
    })
    .post((req, res) => {
        signup(req, res);
    })
userRouter.route('/google')
    .get((req, res) => {
        withGoogle(req, res)
    })


module.exports = userRouter;
