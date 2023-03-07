import axios from "axios"

export const signup = function (email, password, checkPass, setUser) {
    if (email && password) {
        if (password === checkPass) {
            axios.post("http://10.0.2.2:3000/api/user/signup", { email, password })
                .then(r => typeof (r.data) !== "string" ? setUser(r.data) : console.log(r.data))
                .catch(err => console.log(err))
        }
    }
}
export const login = function (email, password, setUser) {
    if (email && password) {
        axios.post("http://10.0.2.2:3000/api/user/login", { email, password })
        .then(r => typeof (r.data) !== "string" ? setUser(r.data) : console.log(r.data))
        .catch(err => console.log(err))
    }
}