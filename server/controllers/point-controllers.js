const { doc, getDocs, collection, query, where, setDoc, updateDoc, addDoc, deleteDoc, collectionGroup } = require("firebase/firestore");
const { db } = require("../firebase/config")





exports.addPoint = function (req, res) {
    let { trip } = req.body
    trip = trip[0].toUpperCase() + trip.slice(1).toLocaleLowerCase()
    const museumCollectionRef = collection(
        db, "points", trip, trip
    );
    addDoc(museumCollectionRef, req.body)
        .then((docRef) => {
            res.send({ ...req.body, id: docRef.id });

            const q = query(collection(db, "points"), where("name", "==", trip));
            getDocs(q).then((snap) => {
                if (snap.size) {
                    const docSize = snap.docs[0].data().size
                    setDoc(doc(db, "points", trip), { name: trip, size: docSize + 1 })
                } else {
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
    trip = trip[0].toUpperCase() + trip.slice(1).toLocaleLowerCase()
    const subCollection = trip
    const ref = doc(db, "points", subCollection, subCollection, id);
    deleteDoc(ref)
        .then(() => {
            const q = query(collection(db, "points"), where("name", "==", trip));
            getDocs(q).then((snap) => {
                const docSize = snap.docs[0].data().size
                if (docSize > 2) {
                    console.log(docSize)

                    setDoc(doc(db, "points", trip), { name: trip, size: docSize - 1 })
                } else {
                    console.log(docSize)
                    deleteDoc(doc(db, "points", subCollection))
                }

            });
            res.send("Point deleted")
        })
        .catch(err => res.send('Error adding point ' + err))
}

exports.editPoint = function (req, res) {
    let { trip, id } = req.params;
    trip = trip[0].toUpperCase() + trip.slice(1).toLocaleLowerCase()

    const subCollection = trip
    const ref = doc(db, "points", subCollection, subCollection, id);
    updateDoc(ref, { title: "changed" })
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


