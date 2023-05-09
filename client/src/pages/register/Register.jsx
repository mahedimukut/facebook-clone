import axios from 'axios';
import { useRef } from 'react';
import './register.css'
import { useNavigate } from "react-router-dom"

function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post("/auth/register", user);
                history("/login", { replace: true });
            } catch (err) {
                console.log(err);
            }
        }
    }
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">
                        facebook
                    </h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on facebook.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder='Username' type="text" className="loginInput" ref={username} required />
                        <input placeholder='Email' type="Email" className="loginInput" ref={email} required />
                        <input placeholder='Password' type="Password" className="loginInput" ref={password} required minLength="6" />
                        <input placeholder='Password again' type="Password" className="loginInput" ref={passwordAgain} required minLength="6" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <span className="loginForgot">Forgot Password</span>
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register