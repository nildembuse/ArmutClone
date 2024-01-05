import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { Form, RouterProvider,createBrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://racoxqghzlyvqxcdbswn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhY294cWdoemx5dnF4Y2Ric3duIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4NzQ3NzcsImV4cCI6MjAxNTQ1MDc3N30.9EQCgqGVimw_G-LUciAmd6I07p5SiTY_JLGs7MnnO-U')


const router = createBrowserRouter (
  [
    {
      path:"/",
      element: <Header/>,
      children: [
       
        {
          index: true,
          element: <Home/>
        },

        {
          path:'/login',
          element:<Login />
        },
       {
        path:'/register',
        element:<Login />
       },

       {
        path:'/form',
        element:<Form />
       },
       
      ]
    },
   
   
  ]
  
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} />
)