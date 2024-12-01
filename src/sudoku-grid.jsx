import PropTypes from "prop-types";
import Title from "./title";
import { useEffect, useState } from "react";

export default function SudokuGrid({ toSolve, sudokuArray }) {
  const [selectedCell, setSelectedCell] = useState(null);
  const [grid, setGrid] = useState(sudokuArray[toSolve]);

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
    const newGrid = sudokuArray[toSolve].map((row) => [...row]);
    if (solveSudoku(newGrid)) {
      setGrid(newGrid);
    } else {
      alert("WRONG SUDOKU!");
    }
  }

  function solveCell() {
    if (selectedCell) {
      const [row, col] = selectedCell;
      const solvedGrid = sudokuArray[toSolve].map((row) => [...row]);
      if (solveSudoku(solvedGrid)) {
        const newGrid = grid.map((row) => [...row]);
        newGrid[row][col] = solvedGrid[row][col];
        setGrid(newGrid);
      } else {
        alert("Wrong Sudoku!");
      }
    } else {
      alert("Please select a cell!");
    }
  }

  function checkAll() {
    let ok = 0,
      spatiiGoale = 0;
    const newGrid = sudokuArray[toSolve].map((row) => [...row]);
    if (solveSudoku(newGrid)) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (grid[i][j] !== 0) {
            if (grid[i][j] !== newGrid[i][j] && ok == 0) {
              alert(
                "Mistake detected! Remember: each number can only appear once in a row, column, and region."
              );
              ok++;
            }
          } else {
            spatiiGoale++;
          }
        }
      }
      if (ok == 0 && spatiiGoale == 0) {
        alert("Congratulations! You've solved the puzzle perfectly!");
      } else if (ok == 0 && spatiiGoale != 0) {
        alert("So far, so good! Keep going—you're on the right track!");
      }
    } else {
      alert("Nu există soluție!");
    }
  }

  function reset() {
    setGrid(sudokuArray[toSolve]);
  }

  useEffect(() => {
    setSelectedCell(null);
  }, [grid]);

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
                        onFocus={() => setSelectedCell([rIndex, cIndex])}
                        className="cellInput"
                        disabled={sudokuArray[toSolve][rIndex][cIndex] !== 0}
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
          Solve All
        </button>
        <button onClick={solveCell} className="side-menu-button">
          Solve Cell
        </button>
        <button onClick={checkAll} className="side-menu-button">
          Check
        </button>
        <button onClick={reset} className="side-menu-button">
          Reset
        </button>
      </div>
    </div>
  );
}
SudokuGrid.propTypes = {
  toSolve: PropTypes.number,
  sudokuArray: PropTypes.array,
};
