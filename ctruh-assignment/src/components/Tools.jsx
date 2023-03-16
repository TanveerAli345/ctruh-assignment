import React from "react"
import colorPalette from '../data/colorPalettes.json'

export default function Tools({ handleColorChange, handleColorPaletteChange }) {
    return(
        <div>
            <input type="color" onChange={handleColorChange} />
            
            <select onChange={handleColorPaletteChange}>
                <option value=""> Choose the background color </option>
                {colorPalette.map((item, index) => (
                <option key={index} value={item[1]}>
                    {item[0]}
                </option>
                ))}
            </select>
        </div>
    )
}