// components/Grid.js
"use client"
import useSpreadsheetStore from "../store/spreadsheetStore"
import Cell from "./Cell"
const Grid = () => {
  const cells = useSpreadsheetStore((state) => state.cells)

  return (
    <div className="grid grid-cols-10 gap-1 p-4">
      {cells.map((cell, index) => (
        <Cell key={index} index={index} />
      ))}
    </div>
  )
}

export default Grid
