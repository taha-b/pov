import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';


let user;

export const signup = function (setUser, navigation, email, password, checkPass) {
    if (setUser) {
        setUser(user)
        AsyncStorage.setItem('user', JSON.stringify(user)) 

    }
    else if (email && password) {
        if (password === checkPass) {
            axios.post("http://10.0.2.2:3000/api/user/signup", { email, password })
                .then(r => {
                    if (typeof (r.data) !== "string") {
                        user = r.data
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Welcome' }],
                        });
                    } else {
                        console.log(r.data)
                    }
                })
                .catch(err => console.log(err))
        }
    }

}
export const login = function (email, password, setUser) {
    if (email && password) {
        axios.post("http://10.0.2.2:3000/api/user/login", { email, password })
            .then(r => {
                typeof (r.data) !== "string" ? setUser(r.data) : console.log(r.data)
                if(typeof r.data !== "string"){
                    setUser(r.data)
                    AsyncStorage.setItem('user', JSON.stringify(r.data)) 
                }
            })
            .catch(err => console.log(err))
    }
}
export const editProfile = function (setUser, name, password, checkPass, id, email) {
    console.log(name)
    if (password && password === checkPass) {
        axios.patch("http://10.0.2.2:3000/api/user", { email, name: name ? name : "", password, id })
            .then(r => typeof (r.data) !== "string" ? setUser({ email, name: name ? name : "", password, id })
                : console.log(r.data))
            .catch(err => console.log(err))
    }
}
export const updateHistory = function (setUser, user, point) {
    const history = [...user.history, point]
    const updatedUser = { ...user, history: history }
    console.log(user.id)
    return axios.patch("http://10.0.2.2:3000/api/user", updatedUser)
        .then(r => typeof (r.data) !== "string" ?
            setUser(updatedUser)
            : console.log(r.data))
        .catch(err => console.log(err))
}

