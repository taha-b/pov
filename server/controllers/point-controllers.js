const { getDoc, doc, getDocs, collection, query, where, setDoc, updateDoc, addDoc, deleteDoc, collectionGroup } = require("firebase/firestore");
const { db } = require("../firebase/config")





exports.addPoint = function (req, res) {
    let { trip } = req.body
    trip = trip[0].toUpperCase() + trip.slice(1)
    const tripCollectionRef = collection(
        db, "points", trip, trip
    );
    addDoc(tripCollectionRef, req.body)
        .then((docRef) => {
            res.send({ ...req.body, id: docRef.id });

            const collectionName = query(collectionGroup(db, trip));

            getDocs(collectionName).then((snap) => {
                if (snap.size > 1) {
                    updateDoc(doc(db, "points", trip), { name: trip, size: snap.size })
                } else {
                    console.log("new trip added")
                    setDoc(doc(db, "points", trip), { name: trip, size: 1 })
                }
            });
        })
        .catch((error) => {
            res.send("Error adding Point: " + error);
        });
};



exports.deletePoint = function (req, res) {
    let { trip, id } = req.params
    trip = trip[0].toUpperCase() + trip.slice(1)
    const subCollection = trip
    const ref = doc(db, "points", subCollection, subCollection, id);
    deleteDoc(ref)
        .then(() => {
            const collectionName = query(collectionGroup(db, trip));

            getDocs(collectionName).then((snap) => {
                console.log(snap.size)

                if (snap.size) {
                    console.log("true")
                    setDoc(doc(db, "points", trip), { name: trip, size: snap.size })
                } else {
                    console.log("delete all")
                    deleteDoc(doc(db, "points", subCollection))
                }

            });
            res.send("Point with the id :" + "'" + id + "'" + " deleted")
        })
        .catch(err => res.send('Error adding point ' + err))
}


exports.editPoint = function (req, res) {
    let { trip, id } = req.params;
    trip = trip[0].toUpperCase() + trip.slice(1)

    const subCollection = trip
    const ref = doc(db, "points", subCollection, subCollection, id);
    updateDoc(ref, req.body)
        .then(() => {
            res.send("Point updated");
        }).catch(err => res.send("Error updating point" + err))
}

exports.getAllPoints = function (req, res) {
    let categories = {};

    getDocs(collection(db, "points")).then((querySnapshot) => {
        const promises = querySnapshot.docs.map((doc) => {
            const collectionName = query(collectionGroup(db, doc.id));
            return getDocs(collectionName).then((subCollection) => {
                categories[doc.id] = subCollection.docs.map((subDoc) => ({
                    ...subDoc.data(),
                    id: subDoc.id,
                }));
            });
        });

        Promise.all(promises).then(() => {
            res.send(categories);
        });
    });
};
exports.getPointsOf1Trip = function (req, res) {
    const { trip } = req.params
    getDocs(query(collectionGroup(db, trip))).then((snap) => {
        if (snap.size) {
            const points = snap.docs.map(e => {
                return { ...e.data(), id: e.id }
            })
            res.send(points)
        } else {
            res.send({})
        }
    }).catch(err => res.send("Trip Not Found"));
};


