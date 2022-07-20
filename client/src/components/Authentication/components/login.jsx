import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

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
      <input
        value={input.email}
        type="email"
        placeholder="ingresa Email.."
        name="email"
        onChange={(e) => handleChange(e)}
      />
      <input
        value={input.password}
        type="password"
        placeholder="ingresa Password.."
        name="password"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" onClick={(e) => Registrar(e)}>
        Enviar
      </button>
    </div>
  );
}
