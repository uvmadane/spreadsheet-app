// src/components/Spreadsheet.jsx

import React from "react"
import Cell from "./Cell"

const Spreadsheet = () => {
  const rows = 20 // Define how many rows you want to display
  const cols = 10 // Define how many columns you want to display

  const cells = Array(rows * cols).fill(null)

  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
    >
      {cells.map((_, index) => (
        <Cell key={index} index={index} />
      ))}
    </div>
  )
}

export default Spreadsheet
