import ThemeToggle from "./theme-toggle";
import PropTypes from "prop-types";

export default function SideMenu({
  handleChange,
  isDark,
  handleMainMenu,
  handleContact,
  handleShowMenu,
  showMenu,
  setShowMenu,
}) {
  return (
    <div className="side-menu">
      <svg viewBox="0 0 24 24" onClick={handleShowMenu}>
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
        />
      </svg>
      {showMenu && (
        <div className="side-menu-content">
          <button
            className="side-menu-button"
            onClick={() => {
              handleMainMenu();
              setShowMenu(false);
            }}
          >
            Menu
          </button>
          <ThemeToggle handleChange={handleChange} isDark={isDark} />
          <button
            className="side-menu-button"
            onClick={() => {
              handleContact();
              setShowMenu(false);
            }}
          >
            Contact
          </button>
        </div>
      )}
    </div>
  );
}
SideMenu.propTypes = {
  handleChange: PropTypes.func,
  isDark: PropTypes.bool,
  handleMainMenu: PropTypes.func,
  handleContact: PropTypes.func,
  handleShowMenu: PropTypes.func,
  showMenu: PropTypes.bool,
  setShowMenu: PropTypes.func,
};
