import axios from "axios"


export const getTrips = function (setTrips) {
    axios.get("http://10.0.2.2:3000/api/point/trips")
        .then(r => typeof (r.data) !== "string" ? setTrips(r.data) : console.log(r.data))
}