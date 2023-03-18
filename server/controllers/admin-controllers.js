const { getDoc, doc, getDocs, collection, query, where } = require("firebase/firestore");
const { db, firebaseMapper } = require("../firebase/config")


const admins = collection(db, "admins");


exports.signin = function (req, res) {
    const { name, password } = req.body

    console.log(name, password)
    if (name && password) {
        const q = query(admins, where("name", "==", name), where("password", "==", password));
        getDocs(q).then((element) => {
            const admin = [];
            element.forEach((doc) => {
                admin.push({ ...doc.data(), id: doc.id });
            });
            res.send(admin);
        }).catch((error) => {
            console.log("Error getting documents: ", error);
        });
    } else {
        res.send("name & password are a must to login")
    }
};

exports.authorisation = function (req, res, next) {
    const { id } = req.headers;
    if (id) {
        const docRef = doc(db, "admins", id);
        getDoc(docRef).then((doc) => {
            if (doc.exists()) {
                next();
            } else {
                res.status(401).send("Unauthorized");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
            res.status(500).send("Error getting document");
        });
    } else { res.status(401).send("Unauthorized"); }
}



