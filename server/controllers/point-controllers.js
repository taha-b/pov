const { async } = require("@firebase/util");
const { listCollections, getCollections, doc, getDocs, collection, query, where, setDoc, getDoc, updateDoc, addDoc, deleteDoc, collectionGroup } = require("firebase/firestore");
const { db, firebaseMapper } = require("../firebase/config")

const points = collection(db, "points");




exports.addPoint = function (req, res) {
    const { category } = req.body
    const museumCollectionRef = collection(
        db, "points", category + "s", category + "s"
    );
    addDoc(museumCollectionRef, req.body)
        .then((docRef) => {
            res.send("Point added with ID: " + docRef.id);

            const q = query(collection(db, "points"), where("name", "==", category + "s"));
            getDocs(q).then((snap) => {
                if (snap.size) {
                    const docSize = snap.docs[0].data().size
                    setDoc(doc(db, "points", category + "s"), { name: category + "s", size: docSize + 1 })
                } else {
                    setDoc(doc(db, "points", category + "s"), { name: category + "s", size: 1 })
                }
            });
        })
        .catch((error) => {
            res.send("Error adding Point: " + error);
        });
};



exports.deletePoint = function (req, res) {
    const { category, id } = req.params
    const subCollection = category + "s"
    const ref = doc(db, "points", subCollection, subCollection, id);
    deleteDoc(ref)
        .then(() => {
            const q = query(collection(db, "points"), where("name", "==", category + "s"));
            getDocs(q).then((snap) => {
                const docSize = snap.docs[0].data().size
                if (docSize > 2) {
                    console.log(docSize)

                    setDoc(doc(db, "points", category + "s"), { name: category + "s", size: docSize - 1 })
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
    const { category, id } = req.params;
    const subCollection = category + "s"
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

