import { useState } from 'react'
import './App.css'
import Navbar from "./componet/Navbar";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
