import { useState } from 'react'
import './App.css'
import Navbar from "./componet/Navbar";
import Footer from './componet/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     
     <Footer />
    </>
  )
}

export default App
