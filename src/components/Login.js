import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate the data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
        
        if(!isSignInForm) {
            // Sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: USER_AVATAR,
                  }).then(() => {
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                  }).catch((error) => {
                    setErrorMessage(error.message)
                  });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
        } else {
            // Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
                console.log(errorMessage);
                
            });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg" alt="login-bg" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="absolute my-36 p-12 bg-black w-3/12 mx-auto right-0 left-0 text-white rounded-md opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-3 my-4 w-full bg-gray-600' />)}
            <input ref={email} type='text' placeholder='Email Address' className='p-3 my-4 w-full bg-gray-600' />
            <input ref={password} type='password' placeholder='Password' className='p-3 my-4 w-full bg-gray-600' />
            <p className='text-red-500 font-bold'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-md' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a member? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login