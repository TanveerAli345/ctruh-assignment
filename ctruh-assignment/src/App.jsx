import { useState, useRef, useEffect } from 'react'
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
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = canvas.getBoundingClientRect().width;
    canvas.height = canvas.getBoundingClientRect().height;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    context.font = "bold 4rem Poppins";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillStyle = color === "#ffffff" ? "#000000" : "#ffffff";
    context.fillText(number, centerX, centerY);
  }, [number, color])
  
  return (
    <div className="main" style={{background: colorPalette}}>
      <Tools
        handleColorChange = {handleColorChange}
        handleColorPaletteChange = {handleColorPaletteChange}
        number = {number}
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
