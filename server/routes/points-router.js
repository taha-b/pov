const pointRouter = require('express').Router();
const { addPoint, deletePoint, editPoint, getAllPoints, getPointsOf1Trip } = require("../controllers/point-controllers");
const { authorisation } = require("../controllers/admin-controllers")

pointRouter.route('/')
   .post(authorisation, addPoint)
    .get((req, res) => {
        getAllPoints(req, res)
    })
pointRouter.route('/:trip/:id')
    .delete(authorisation, deletePoint)
    .patch(authorisation, editPoint)

pointRouter.route('/:trip')
    .get((req, res) => {
        getPointsOf1Trip(req, res)
    })




module.exports = pointRouter;
