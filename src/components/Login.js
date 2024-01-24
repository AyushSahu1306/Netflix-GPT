//rafce
import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { UserAvatar } from '../utils/constants';

const Login = () => {

  const [isSignInForm,setisSigninForm]=useState(true);
  const [errormessage,seterrormessage]=useState(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const name =useRef(null);
  const email= useRef(null);
  const password= useRef(null);

  const toggleSignInForm=()=>{
    setisSigninForm(!isSignInForm);
  }

  const handleButtonClick=()=>{
    // validate the form data
    const message= checkValidData(email.current.value,password.current.value);
    // console.log(message);
    seterrormessage(message);

   if(message) return;

   //Sign up/Sign In

   if(!isSignInForm){
    //Sign up Logic
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
    .then((userCredential) => {
      
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name.current.value, photoURL:UserAvatar
      }).then(() => {
        // Profile updated!
        const {uid,email,displayName,photoURL} = auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
       
      })
      .catch((error) => {
       seterrormessage(error.message)
      });
     
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrormessage(errorCode+" "+errorMessage);
      
    });
   }

   else{
    //Sign in Logic
    signInWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+" "+errorMessage);

  });
   }
  }

  return (
    <div>
      <Header/>

      <div className='absolute'>
      <img alt="" aria-hidden="true" data-uia="nmhp-card-hero+background+image" src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"></img>
      </div>

      {/* u can use formik library to create forms in react */}

      <form onSubmit={(e)=>e.preventDefault()} className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0  text-white rounded-lg bg-opacity-80 ">

        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>

        {!isSignInForm && <input type='text' ref={name}  placeholder='Full Name' className='p-3 m-2 w-full bg-[#333]'></input>}

        <input ref={email} type='text' placeholder='Email Address' className='p-3 m-2 w-full bg-[#333]'></input>

        <input ref={password} type='password' placeholder='Password' className='p-3 m-2 w-full bg-[#333]'></input>

        <p className='text-yellow-600 px-3 text-[16px]'>{errormessage}</p>

        <button className='p-2 my-8 mx-2 bg-red-600 w-full rounded-lg'
         onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-4 hover:cursor-pointer font-bold' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up ":"Already registered? Sign In Now"}</p>
      

      </form >
      

    </div>
  )
}

export default Login