const userRouter = require('express').Router();
const { signin } = require("../controllers/admin-controllers");

userRouter.route('/')
    .post((req, res) => {
        signin(req, res)
    })




module.exports = userRouter;
