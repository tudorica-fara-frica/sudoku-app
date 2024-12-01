import { useState } from "react";
import Title from "./title";

const emptyGrid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

export default function SudokuSolver() {
  const [grid, setGrid] = useState(emptyGrid);
  const [finalGrid, setFinalGrid] = useState(emptyGrid);

  function changeCell(e, row, col) {
    const newGrid = grid.map((row) => [...row]);
    const val = e.target.value;
    if (val === "") {
      newGrid[row][col] = 0;
    } else if (val >= 1 && val <= 9) {
      newGrid[row][col] = parseInt(val);
    }
    setGrid(newGrid);
  }

  function checkCell(a, x, y, valoare) {
    for (let i = 0; i < 9; i++) {
      if (a[x][i] === valoare) {
        return false;
      }
    }
    for (let i = 0; i < 9; i++) {
      if (a[i][y] === valoare) {
        return false;
      }
    }
    let xrnd = Math.floor(x / 3) * 3;
    let ycol = Math.floor(y / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (a[xrnd + i][ycol + j] === valoare) {
          return false;
        }
      }
    }
    return true;
  }

  function solveSudoku(a) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (a[i][j] === 0) {
          for (let k = 1; k <= 9; k++) {
            if (checkCell(a, i, j, k)) {
              a[i][j] = k;
              if (solveSudoku(a)) {
                return true;
              }
              a[i][j] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  function solve() {
    const newGrid = grid.map((row) => [...row]);
    if (!newGrid.every((row) => row.every((cell) => cell !== 0))) {
      setFinalGrid(grid);
      if (
        newGrid.some((row) => row.some((cell) => cell !== 0)) &&
        solveSudoku(newGrid)
      ) {
        setGrid(newGrid);
      } else {
        alert("Wrong / Empty Sudoku!");
      }
    } else {
      alert("Please reset!");
    }
  }

  function reset() {
    setGrid(emptyGrid);
    setFinalGrid(emptyGrid);
  }

  return (
    <div className="sudoku">
      <Title />
      <table className="sudokuGrid">
        <tbody>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
            return (
              <tr
                key={rIndex}
                className={rIndex === 3 || rIndex === 6 ? "rBorder" : ""}
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                  return (
                    <td
                      key={`${rIndex}${cIndex}`}
                      className={cIndex === 3 || cIndex === 6 ? "cBorder" : ""}
                    >
                      <input
                        value={
                          grid[rIndex][cIndex] === 0 ? "" : grid[rIndex][cIndex]
                        }
                        onChange={(e) => changeCell(e, rIndex, cIndex)}
                        className="cellInput"
                        disabled={finalGrid[rIndex][cIndex] !== 0}
                      />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="sudoku-buttons">
        <button onClick={solve} className="side-menu-button">
          Solve
        </button>
        <button onClick={reset} className="side-menu-button">
          Reset
        </button>
      </div>
    </div>
  );
}
