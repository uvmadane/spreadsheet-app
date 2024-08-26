// src/components/Cell.jsx

"use client";

import React, { useRef } from 'react';
import useStore from '../store/spreadsheetStore';

const Cell = ({ index }) => {
  const { value, align, fontSize } = useStore((state) => state.cells[index]);

  const inputRef = useRef(null);

  return (
    <div
      className="cell border border-gray-300 p-2"
      style={{ textAlign: align, fontSize: `${fontSize}px` }}
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) =>
          useStore.getState().updateCell(index, { value: e.target.value })
        }
        className="w-full h-full p-1 border-none outline-none"
      />
    </div>
  );
};

export default Cell;
