import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from './LandingPage'
import Login from './Login'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/UserSlice'
import Browse from './Browse'
const Body = () => {
    const dispatch=useDispatch()
    const approuter=createBrowserRouter([
        {
            path:"/",
            element:<LandingPage/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
          if (user) {
            
            const  {uid,email,displayName} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName}) )
          } else {
            dispatch(removeUser());
          }
        });
      },[])
  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default Body
