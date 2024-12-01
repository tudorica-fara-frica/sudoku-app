import { useState } from "react";
import SideMenu from "./side-menu.jsx";
import ThemeToggle from "./theme-toggle.jsx";
import "./app.css";
import MainMenu from "./main-menu.jsx";
import Contact from "./contact.jsx";
import SelectMenu from "./select-menu.jsx";
import SudokuGrid from "./sudoku-grid.jsx";
import SudokuSolver from "./sudoku-solver.jsx";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isSelected, setIsSelected] = useState(null);
  const [sudokuGrid, setSudokuGrid] = useState(false);
  const [sudokuArray, setSudokuArray] = useState(null);
  const [mainMenu, setMainMenu] = useState(true);
  const [selectMenu, setSelectMenu] = useState(false);
  const [contact, setContact] = useState(false);
  const [toSolve, setToSolve] = useState(false);
  const [sudokuSolver, setSudokuSolver] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu((p) => !p);
  }

  function handleSudokuGrid(index) {
    setToSolve(index);
    setSudokuGrid(true);
    setMainMenu(false);
    setContact(false);
    setSelectMenu(false);
    setSudokuSolver(false);
    setShowMenu(false);
  }

  function handleSelectMenu() {
    setSelectMenu(true);
    setMainMenu(false);
    setContact(false);
    setSudokuGrid(false);
    setSudokuSolver(false);
    setShowMenu(false);
  }

  function handleContact() {
    setContact(true);
    setMainMenu(false);
    setSelectMenu(false);
    setSudokuGrid(false);
    setIsSelected(null);
    setSudokuSolver(false);
    setShowMenu(false);
  }

  function handleMainMenu() {
    setContact(false);
    setMainMenu(true);
    setSelectMenu(false);
    setSudokuGrid(false);
    setIsSelected(null);
    setSudokuSolver(false);
    setShowMenu(false);
  }

  function handleChange() {
    setIsDark((prev) => !prev);
  }

  function handleSudokuSolver() {
    setContact(false);
    setMainMenu(false);
    setSelectMenu(false);
    setSudokuGrid(false);
    setIsSelected(null);
    setSudokuSolver(true);
    setShowMenu(false);
  }

  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      <ThemeToggle handleChange={handleChange} isDark={isDark} />
      <SideMenu
        handleChange={handleChange}
        isDark={isDark}
        handleMainMenu={handleMainMenu}
        handleContact={handleContact}
        handleShowMenu={handleShowMenu}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
      {mainMenu && (
        <MainMenu
          setIsSelected={setIsSelected}
          handleSelectMenu={handleSelectMenu}
          handleSudokuSolver={handleSudokuSolver}
        />
      )}
      {contact && <Contact />}
      {selectMenu && (
        <SelectMenu
          isSelected={isSelected}
          handleSudokuGrid={handleSudokuGrid}
          setSudokuArray={setSudokuArray}
        />
      )}
      {sudokuGrid && <SudokuGrid toSolve={toSolve} sudokuArray={sudokuArray} />}
      {sudokuSolver && <SudokuSolver />}
    </div>
  );
}
