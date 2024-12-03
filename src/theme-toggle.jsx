import PropTypes from "prop-types";

export default function ThemeToggle({ handleChange, isDark }) {
  return (
    <div className="toggleContainer">
      <input
        className="toggle"
        id="check"
        type="checkbox"
        aria-label="Theme change toggle"
        onChange={handleChange}
        checked={isDark}
      />
      <label htmlFor="check"></label>
    </div>
  );
}
ThemeToggle.propTypes = {
  handleChange: PropTypes.func,
  isDark: PropTypes.bool,
};
