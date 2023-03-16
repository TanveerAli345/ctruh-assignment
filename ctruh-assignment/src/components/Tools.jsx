import React from "react"

export default function Tools({ handleColorChange }) {
    return(
        <div>
            <input type="color" onChange={handleColorChange} />
        </div>
    )
}