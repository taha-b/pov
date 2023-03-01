const { doc, getDocs, collection, query, where, setDoc, getDoc, updateDoc } = require("firebase/firestore");
const { db, firebaseMapper } = require("../firebase/config")


const users = collection(db, "users");


exports.signin = function (req, res) {
    const { email, password } = req.body
    console.log(email, password)
    if (email && password) {
        const q = query(users, where("email", "==", email), where("password", "==", password));
        getDocs(q).then((e) => {
            const user = firebaseMapper(e)
            res.send(user)
        }).catch(err => res.send("user not found"))
    } else {
        res.send("email & password are a must to login")
    }
};


exports.signup = function (req, res) {
    const { name, password, email } = req.body
    const q = query(users, where("email", "==", email));
    if (email && password) {

        getDocs(q).then((e) => {
            console.log(e.size)
            if (e.size) {
                res.send("user email already exist")
            } else {
                const newUser = { name, password, email, PI: [] }
                setDoc(doc(users), newUser)
                    .then((e) => {
                        // console.log(e)
                        res.send(newUser)
                    })
            }
        }).catch(err => res.send(err))
    } else {
        res.send("email & password are a must to login")
    }
};

//signin / signup with google
exports.withGoogle = function (req, res) {
    const { name, uid, email } = req.body
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
            const newUser = { name, uid, email, PI: [] }
            setDoc(doc(users), newUser)
                .then((e) => {
                    // console.log(e)
                    res.send(newUser)
                })
        }
    }).catch(err => res.send(err))
};

//user update
exports.updateUser = function (req, res) {
    const { id } = req.body
    const docRef = doc(db, "users", id)
    let updatedUser = { ...req.body }
    delete updatedUser.id
    updateDoc(docRef, updatedUser).then((e) => {
        res.send(req.body)
    })

}





