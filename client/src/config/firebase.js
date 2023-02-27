
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";
import axios from "axios";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const GoogleAuth = () => {
    signInWithPopup(auth, provider)
        .then((r) => {
            axios.get(`http://localhost:3000/api/user/google`, {
                headers: { name: r.user.displayName, uid: r.user.uid, email: r.user.email }
            })
                .then(response => {
                    // handle success
                })
                .catch(error => {
                    // handle error
                })
        })
        .catch((error) => {
            console.log(error);
        });
};