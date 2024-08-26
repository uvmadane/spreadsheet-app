import create from 'zustand';

const useSpreadsheetStore = create((set) => ({
  cells: Array(1000).fill(null).map(() => ({
    value: '',
    align: 'left',
    fontSize: 14,
  })),
  history: [],
  future: [],
  cellsPerPage: 100,
  currentPage: 1,

  updateCell: (index, newProps) => set((state) => {
    const updatedCells = [...state.cells];
    const prevState = { ...state };
    updatedCells[index] = { ...updatedCells[index], ...newProps };
    return {
      cells: updatedCells,
      history: [...state.history, prevState],
      future: [],
    };
  }),

  validateCell: (index, value) => {
    if (isNaN(value)) {
      alert('Please enter a valid number');
      return;
    }
    set((state) => ({
      cells: state.cells.map((cell, idx) =>
        idx === index ? { ...cell, value } : cell
      ),
    }));
  },

  undo: () => set((state) => {
    const lastHistory = state.history[state.history.length - 1];
    if (!lastHistory) return state;
    return {
      cells: lastHistory.cells,
      history: state.history.slice(0, -1),
      future: [state, ...state.future],
    };
  }),

  redo: () => set((state) => {
    const nextFuture = state.future[0];
    if (!nextFuture) return state;
    return {
      cells: nextFuture.cells,
      history: [...state.history, state],
      future: state.future.slice(1),
    };
  }),

  setCurrentPage: (page) => set({ currentPage: page }),

  getCurrentCells: (cells, currentPage, cellsPerPage) => {
    const indexOfLastCell = currentPage * cellsPerPage;
    const indexOfFirstCell = indexOfLastCell - cellsPerPage;
    return cells.slice(indexOfFirstCell, indexOfLastCell);
  },
}));

export default useSpreadsheetStore;
