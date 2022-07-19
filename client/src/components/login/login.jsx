import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzcYpzTDLEUtyTSoQ8YgmNlgjVH7bdSmQ",
    authDomain: "project-a9a3c.firebaseapp.com",
    databaseURL: "https://project-a9a3c-default-rtdb.firebaseio.com",
    projectId: "project-a9a3c",
    storageBucket: "project-a9a3c.appspot.com",
    messagingSenderId: "777692993210",
    appId: "1:777692993210:web:7ea37cf97e045bf126d483",
    measurementId: "G-PJCY7BSSG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




export default function Login() {
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });

    }


    function Registrar() {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, input.email, input.password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }




    /* const [userType, setUserType] = useState('') */

    return (
        <div>
            <input value={input.email} type='email' placeholder='ingresa Email..' name="email" onChange={e => handleChange(e)} />
            <input value={input.password} type='password' placeholder='ingresa Password..' name="password" onChange={e => handleChange(e)} />
            <button type="submit" onClick={(e) => Registrar(e)}>Enviar</button>
        </div>
    );
}
