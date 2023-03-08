import axios from "axios"


let user;

export const signup = function (setUser, navigation, email, password, checkPass) {
    if (setUser) {
        setUser(user)
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
            .then(r => typeof (r.data) !== "string" ? setUser(r.data) : console.log(r.data))
            .catch(err => console.log(err))
    }
}