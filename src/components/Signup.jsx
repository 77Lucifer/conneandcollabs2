import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav';
import img6 from './images/img6.avif';
import { getAuth } from "firebase/auth";
import { app } from "../firebase-config";

const auth = getAuth(app);

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const createuser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User creation successful
        console.log('Success', userCredential.user);
        toast.success('Sign up Successfully', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        // Redirect to Freelancer page after successful signup
        navigate('/Freelancer');
      })
      .catch((error) => {
        // Handle errors here
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        console.log('Error');
        toast.error('Please check email and password correctly!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };


  const isInvalid = email === '' && password ===''; 


  return (
    <>
      <Nav />
      <div class="sign-page">
        <div class="sign-inner">
          <div class="sign-l">
            <img src={img6} alt="" />
          </div>
          <div class="sign-r">
            <h2>Connect With Us</h2>
            <form action="">
              <h3>Sign Up</h3>
              <div class="sign-info">
                <div class="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 
                          0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                  <input
                    type="text" placeholder="Full Name" required />
                </div>
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
                <Link to='/Login'><h5>Already have an account? <span>Login</span></h5></Link>
                {/* <a href="#"><h5>forgot <span>password</span></h5></a> */}
              </div>
              <Link to='/Freelancer'>
               <button class="button-64 sign-btn" disabled={isInvalid} onClick={createuser}><span>Sign up</span></button>
              </Link>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
