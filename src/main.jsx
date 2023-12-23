import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient('https://ridqsymwdsixvcfadgfa.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZHFzeW13ZHNpeHZjZmFkZ2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk4NzQ3MzEsImV4cCI6MjAxNTQ1MDczMX0.G8HWBXxpqRJadygtrKOMZ1DI7hE-m_7fGzbs5H3EFp4')


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
       
      ]
    },
    {
      path:'/login',
      element:<Login />
  },
   
  ]
  
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} />
)