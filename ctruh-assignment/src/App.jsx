import { useState } from 'react'
import './App.css'
import Canvas from './components/Canvas'
import Tools from './components/Tools'

function App() {
  const [color, setColor] = useState("#ffffff")

  const handleColorChange = (e) => {
    setColor(e.target.value);
  }
  
  return (
    <div className="main">
      <Tools
        handleColorChange = {handleColorChange}
      />
      <Canvas
        color = {color}
      />
    </div>
  )
}

export default App
