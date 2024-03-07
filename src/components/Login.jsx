import React, { useState } from 'react'
import Nav from './Nav'
import './Style/Login.css'
import img6 from './images/img6.avif'
import { ToastContainer, toast } from 'react-toastify';
import Freelancer from './Freelancer';
import 'react-toastify/dist/ReactToastify.css';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
// import { app } from "../firebase"
import { Link } from 'react-router-dom';


// const auth = getAuth(app);
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginuser = () => {
        signInWithEmailAndPassword(auth, email, password).then((value) => {
            console.log('Login successful');
            const notify = () => {
                toast.success('Login Successfully', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            };
            notify();
        })
            .catch((err) => {
                console.log(err)
                toast.error('Invalid email and password !', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            })
    };
    const isInvalid = email === '' && password ==='';

    return (
        <>
            <Nav />
            <div class="sign-page">
                <div class="sign-inner">

                    <div class="sign-r">
                        <h2>Connect With Us</h2>
                        <form action="">
                            <h3>Login</h3>
                            <div class="sign-info">
                                <div class="input-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                        <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 
                          92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                                    <input onChange={(e) => setEmail(e.target.value)}
                                        value={email} type="email" placeholder="E-mail" required />
                                </div>
                                <div class="input-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                                        <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35
                        .3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                                    <input onChange={(e) => setPassword(e.target.value)}
                                        value={password} type="password" placeholder="Password" required />
                                </div>
                            </div>
                            <div class="f-password">
                                <a href="#"><h5>forgot <span>password</span></h5></a>
                            </div>
                            <Link to='/Freelancer'>
                                <button onClick={loginuser} disabled={isInvalid} class="button-64 login-btn"><span>Login</span></button>                            
                            </Link>
                                </form>
                        <ToastContainer />
                    </div>
                    <div class="sign-l">
                        <img src={img6} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
