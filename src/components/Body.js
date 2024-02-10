import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { removeUser } from '../utils/userSlice'

const Body = () => {
    
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<Login/>,
        
    },
    {
        path:"/browse",
        element:<Browse/>
    },
    
])

  
  const dispatch=useDispatch();
  dispatch(removeUser());
 

  return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body