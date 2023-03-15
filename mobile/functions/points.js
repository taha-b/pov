import axios from "axios"
let points;

export const getTrips = function (setTrips) {
    axios.get("http://10.0.2.2:3000/api/trip")
        .then(r => typeof (r.data) !== "string" ? setTrips(r.data) : console.log(r.data))
}


export const getPoints = function (trip, setPoints, setTags) {
    axios.get("http://10.0.2.2:3000/api/point/" + trip)
        .then(r => {
            if (typeof (r.data) == "string") {
                console.log(r.data)
            } else {
                setPoints(r.data)
                points = r.data

                let tags = ["All"]

                r.data.forEach(element => {
                    element.tags.forEach(tag => {
                        tags.push(tag[0].toUpperCase() + tag.slice(1).toLowerCase())
                    });
                });

                setTags(tags.filter((item, index) => {
                    return tags.indexOf(item) === index;
                }))

            }
        })
}
export const filterPoints = function (setPoints, tag) {
    setPoints(tag === "All" ? points :
        points.filter(e => {
            if (e.tags.indexOf(tag) !== -1) {
                return true
            } else {
                return false
            }
        })
    )
}
