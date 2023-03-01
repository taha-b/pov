const userRouter = require('express').Router();
const { signin, signup, updateUser, withGoogle } = require("../controllers/user-controllers");

userRouter.route('/')
    .patch((req, res) => {
        updateUser(req, res)
    })
userRouter.route('/login')
    .post((req, res) => {
        signin(req, res)
    })
userRouter.route('/signup')
    .post((req, res) => {
        signup(req, res);
    })
userRouter.route('/google')
    .post((req, res) => {
        withGoogle(req, res)
    })


module.exports = userRouter;
