import React from "react"

export default function Canvas({ color, canvasRef }) {
    return(
        <div className="canvas-wrapper">
            <canvas
                id="canvas"
                style={{
                    background: color,
                    border: "2px solid #ccc",
                    borderRadius: "10px"
                }}
            >
                This is a canvas.
                If you are able to read this text, your browser does not support the HTML5 canvas element.
            </canvas>
        </div>
    )
}