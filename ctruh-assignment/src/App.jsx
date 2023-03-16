import { useState, useRef } from 'react'
import './App.css'
import Canvas from './components/Canvas'
import Tools from './components/Tools'

function App() {
  const [color, setColor] = useState("#ffffff")
  const [colorPalette, setColorPalette] = useState("")
  const canvasRef = useRef(null)
  const [number, setNumber] = useState(69)

  const handleColorChange = (e) => {
    setColor(e.target.value);
  }

  const handleColorPaletteChange = (e) => {
    setColorPalette(e.target.value);
  }

  const handleNumberChange = (e) => {
    setNumber(e.target.value)
    console.log(number)
  }
  
  return (
    <div className="main" style={{background: colorPalette}}>
      <Tools
        handleColorChange = {handleColorChange}
        handleColorPaletteChange = {handleColorPaletteChange}
        handleNumberChange = {handleNumberChange}
      />
      <Canvas
        canvasRef = {canvasRef}
        color = {color}
      />
    </div>
  )
}

export default App
