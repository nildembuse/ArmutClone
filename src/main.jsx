import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'


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
   
  ]
  
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router} />
)