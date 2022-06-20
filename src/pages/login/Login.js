import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css"

export default function Login() {

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input onChange={(event) => {setLoginEmail(event.target.value)}} className="loginInput" type="email" placeholder="Enter your email..." />
                <label>Password</label>
                <input onChange={(event) => {setLoginPassword(event.target.value)}} className="loginInput" type="password" placeholder="Enter your password..." />
                <button onClick={login} className="loginButton">Login</button>
            </form>
            <button className="loginRegisterButton">
                <Link className="link" to="/register">Register</Link>
            </button>
        </div>
    );
}