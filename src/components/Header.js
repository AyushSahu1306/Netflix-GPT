import React, { useState,useEffect } from 'react'
import { auth } from '../utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector,useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import {  logo } from '../utils/constants';
import { toggleGPTSearchView } from '../utils/GPTSlice';
import {SUPPORTED_LANGUAGES} from "../utils/languageConstants";
import { changeLanguage } from '../utils/configSlice';
const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [popup,setpopup]=useState(false);
  // const dispatch = useDispatch();
  const user=useSelector(store=>store.user);
 // console.log(user?.photoURL);

  const showGPTSearch=useSelector(store=>store.GPT.showGPTSearch)

  //we write this here as header will always present and it will check authentication always
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
      } 
      else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=>unsubscribe();
  },[])


  const handleSignout=()=>{
   
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  const handleGPTClick=()=>{
    //Toggle GPT Search
    dispatch(toggleGPTSearchView());
  }

  // const handlepopup=()=>{
  //   setpopup(!popup);
  // }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  return (

    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between'>

       <img src={logo} className="w-[180px] mx-[50px] h-[80px]"></img>


      {user && <div className='flex p-2 mt-2'>

      {showGPTSearch && <select className=' bg-gray-700 text-white m-3 ' onChange={handleLanguageChange}>
      {SUPPORTED_LANGUAGES.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)};
      </select>}

        {/* <img alt='user-icon' src={user?.photoURL} className='w-12 h-12 mt-2'></img> */}

          <button className='py-2 px-4 m-2 bg-purple-800 text-white rounded-lg ml-4' onClick={handleGPTClick}>
          {showGPTSearch?"Home":"GPT Search"}  
            </button>

        {/* <button className='mb-6' onClick={handlepopup}>🔽</button> */}
        <button className='bg-red-600 m-2 rounded-md px-2 h-[50px]  text-white ' onClick={handleSignout}> Sign Out</button>
      </div>}

    {/* {popup && <div className='absolute text-white w-[130px] h-[150px] bg-black top-[50px] right-[120px] opacity-60 '  >
        <h1 className='p-2 m-2'>{user?.displayName}</h1>
      </div>} */}
    </div>
  )
}
// className='absolute w-[100px] h-[150px] right-[120px] top-[50px] opacity-35 bg-black z-10'

export default Header