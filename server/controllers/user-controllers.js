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
    const { name, password, email } = req.headers
    const q = query(users, where("email", "==", email));
    getDocs(q).then((e) => {
        console.log(e.size)
        if (e.size) {
            res.send("user email already exist")
        } else {
            const newUser = { name, password, email }
            setDoc(doc(users), newUser)
                .then((e) => {
                    // console.log(e)
                    res.send("Added Succesfuly")
                })
        }
    }).catch(err => res.send(err))
};


exports.withGoogle = function (req, res) {
    const { name, uid, email } = req.headers
    const q = query(users, where("email", "==", email));
    getDocs(q).then((e) => {
        if (e.size) {
            const user = firebaseMapper(e)
            if (user.uid) {
                res.send(user)
            } else {
                const docRef = doc(db, "users", user.id)
                let newUser = { ...user, uid };

                updateDoc(docRef, { uid }).then(() => res.send(newUser))
            }
        } else {
            const newUser = { name, uid, email }
            setDoc(doc(users), newUser)
                .then((e) => {
                    // console.log(e)
                    res.send(newUser)
                })
        }
    }).catch(err => res.send(err))
};
