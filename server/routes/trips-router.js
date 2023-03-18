const tripRouter = require('express').Router();
const { addTrip, deleteTrip, updateTrip, getTrips } = require("../controllers/trips-controller");
const { authorisation } = require("../controllers/admin-controllers")

tripRouter.route('/')
    .post(authorisation, addTrip)
    .get((req, res) => {
        getTrips(req, res)
    })

tripRouter.route('/:name')
    .delete(authorisation, deleteTrip)
    .patch(authorisation, updateTrip)



module.exports = tripRouter;
