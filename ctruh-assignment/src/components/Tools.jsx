import React from "react"
import colorPalette from '../data/colorPalettes.json'

export default function Tools({ handleColorChange, handleColorPaletteChange }) {
    return(
        <div className="tools">
            <div className="canvas-tools">
                <input id="ip-color" type="color" onChange={handleColorChange} />
                <input id="ip-number" type="number" />
            </div>
            
            <select id="ip-select" onChange={handleColorPaletteChange}>
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