import Title from "./title";
import PropTypes from "prop-types";

export default function MainMenu({
  handleSelectMenu,
  setIsSelected,
  handleSudokuSolver,
}) {
  return (
    <div className="mainMenu">
      <Title />
      <button
        className="side-menu-button"
        onClick={() => {
          handleSelectMenu();
          setIsSelected(1);
        }}
      >
        Normal
      </button>
      <button
        className="side-menu-button"
        onClick={() => {
          handleSelectMenu();
          setIsSelected(2);
        }}
      >
        Expert
      </button>
      <button className="side-menu-button" onClick={handleSudokuSolver}>
        Solver
      </button>
    </div>
  );
}
MainMenu.propTypes = {
  handleSelectMenu: PropTypes.func,
  setIsSelected: PropTypes.func,
  handleSudokuSolver: PropTypes.func,
};
