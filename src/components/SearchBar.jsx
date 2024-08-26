import { useState } from 'react';
import useSpreadsheetStore from '../store/spreadsheetStore';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const cells = useSpreadsheetStore((state) => state.cells);
  const currentPage = useSpreadsheetStore((state) => state.currentPage);
  const cellsPerPage = useSpreadsheetStore((state) => state.cellsPerPage);
  const getCurrentCells = useSpreadsheetStore((state) => state.getCurrentCells);

  const filteredCells = getCurrentCells(cells, currentPage, cellsPerPage).filter((cell) =>
    cell.value.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="border p-2 w-full mb-4"
      />
      <div className="grid grid-cols-10 gap-1">
        {filteredCells.length > 0 ? (
          filteredCells.map((cell, index) => (
            <div key={index} className="border p-2">
              {cell.value}
            </div>
          ))
        ) : (
          <div className="col-span-10 text-center">No results found</div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
