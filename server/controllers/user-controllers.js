const { doc, getDocs, collection, query, where, setDoc, getDoc, updateDoc } = require("firebase/firestore");
const { db, firebaseMapper } = require("../firebase/config")


const users = collection(db, "users");


exports.signin = function (req, res) {
    const { name, password } = req.headers
    const q = query(users, where("name", "==", name), where("password", "==", password));
    getDocs(q).then((e) => {
        const user = firebaseMapper(e)
        res.send(user)
    }).catch(err => res.send("user not found"))
};
exports.signup = function (req, res) {
    const { name, password } = req.headers
    const q = query(users, where("name", "==", name));
    getDocs(q).then((e) => {
        console.log(e.size)
        if (e.size) {
            res.send("user name already exist")
        } else {
            const newUser = { name, password }
            setDoc(doc(users), newUser)
                .then((e) => {
                    // console.log(e)
                    res.send("Added Succesfuly")
                })
        }
    }).catch(err => res.send(err))
};
