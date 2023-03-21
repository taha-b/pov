import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';


let user;

export const signup = function (setUser, navigation, email, password, checkPass, setError, setLoading) {
    if (setUser) {
        setUser(user)
        AsyncStorage.setItem('user', JSON.stringify(user))

    }
    else if (email && password && checkPass) {
        if (password === checkPass) {
            setLoading(true)
            axios.post("http://192.168.1.19:3000/api/user/signup", { email, password })
                .then(r => {
                    setLoading(false)
                    if (typeof (r.data) !== "string") {
                        user = r.data
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Welcome' }],
                        });
                    } else {
                        setError(r.data)
                    }
                })
                .catch(err => { setError(err); setLoading(false) })
        } else {
            setError("Passwords Dosent Match")
        }
    }
    else {
        setError("Please fill up all the inputs")
    }
}
export const login = function (email, password, setUser, setError, setLoading) {
    if (email && password) {
        setLoading(true)
        axios.post("http://192.168.1.19:3000/api/user/login", { email, password })
            .then(r => {
                setLoading(false)
                if (typeof r.data !== "string") {
                    setUser(r.data)
                    AsyncStorage.setItem('user', JSON.stringify(r.data))
                } else {
                    setError(r.data)
                }
            })
            .catch(err => { setError(err); setLoading(false) })
    } else {
        setError("Email and Password are required")
    }
}
export const editProfile = function (setUser, name, password, checkPass, id, email, setError, setLoading) {
    console.log(name)
    if (password && password === checkPass) {
        setLoading(true)
        axios.patch("http://192.168.1.19:3000/api/user", { email, name: name ? name : "", password, id })
            .then(r => {
                setLoading(false)
                if (typeof r.data !== "string") {
                    setUser({ email, name: name ? name : "", password, id })
                    AsyncStorage.setItem('user', JSON.stringify(r.data))
                } else {
                    setError(r.data)
                }
            }).catch(err => { setError(err); setLoading(false) })
    }
}
export const updateHistory = function (setUser, user, point) {
    const history = [...user.history, point]
    const updatedUser = { ...user, history: history }
    return axios.patch("http://192.168.1.19:3000/api/user", updatedUser)
        .then(r => {
            if (typeof (r.data) !== "string") {
                setUser(updatedUser)
            }
        })

        .catch(err => console.log(err))
}

