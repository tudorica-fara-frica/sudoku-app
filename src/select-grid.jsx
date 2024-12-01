import PropTypes from "prop-types";

export default function SelectGrid({ grills, handleSudokuGrid }) {
  return (
    <div className="select-grid">
      {grills.map((grid, index) => {
        return (
          <table
            className="select-sudokuGrid"
            key={index}
            onClick={() => handleSudokuGrid(index)}
          >
            <p className="sudokuNumber">{index + 1}</p>
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
                          className={
                            cIndex === 3 || cIndex === 6 ? "cBorder" : ""
                          }
                        >
                          <input
                            value={
                              grid[rIndex][cIndex] === 0
                                ? ""
                                : grid[rIndex][cIndex]
                            }
                            className="select-cellInput"
                            disabled={grid[rIndex][cIndex] !== 0}
                            readOnly={grid[rIndex][cIndex] === 0}
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      })}
    </div>
  );
}
SelectGrid.propTypes = {
  grills: PropTypes.array,
  handleSudokuGrid: PropTypes.func,
};
