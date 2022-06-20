import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Link } from "react-router-dom";
import "./register.css"

export default function Register() {
;
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input  className="registerInput" type="text" placeholder="Enter your username..." />
                <label>Email</label>
                <input onChange={(event) => {setRegisterEmail(event.target.value)}} className="registerInput" type="email" placeholder="Enter your email..." />
                <label>Password</label>
                <input onChange={(event) => {setRegisterPassword(event.target.value)}} className="registerInput" type="password" placeholder="Enter your password..." />
                <button className="registerButton" onClick={register}>Register</button>
            </form>
            <button className="registerLoginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
        </div>
    );
}