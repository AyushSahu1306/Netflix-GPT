
//rafce
import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm,setisSigninForm]=useState(true);

  const toggleSignInForm=()=>{
    setisSigninForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>

      <div className='absolute'>
      <img alt="" aria-hidden="true" data-uia="nmhp-card-hero+background+image" src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"></img>
      </div>

      {/* u can use formik library to create forms in react */}

      <form className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80 ">
        <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
        {!isSignInForm && <input type='text' placeholder='Full Name' className='p-3 m-2 w-full bg-[#333]'></input>}
        <input type='text' placeholder='Email Address' className='p-3 m-2 w-full bg-[#333]'></input>
        <input type='password' placeholder='Password' className='p-3 m-2 w-full bg-[#333]'></input>
        <button className='p-2 my-8 mx-2 bg-red-600 w-full rounded-lg'>{isSignInForm?"Sign In":"Sign Up"}</button>
        <p className='py-4 hover:cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up ":"Already registeres? Sign In Now"}</p>
      </form>

    </div>
  )
}

export default Login