import { useState } from 'react'
import './App.css'
import Canvas from './components/Canvas'
import Tools from './components/Tools'

function App() {
  const [color, setColor] = useState("#ffffff")
  const [colorPalette, setColorPalette] = useState("")

  const handleColorChange = (e) => {
    setColor(e.target.value);
  }

  const handleColorPaletteChange = (e) => {
    setColorPalette(e.target.value);
  }
  
  return (
    <div className="main" style={{background: colorPalette}}>
      <Tools
        handleColorChange = {handleColorChange}
        handleColorPaletteChange = {handleColorPaletteChange}
      />
      <Canvas
        color = {color}
      />
    </div>
  )
}

export default App
