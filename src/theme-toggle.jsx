import PropTypes from "prop-types";

export default function ThemeToggle({ handleChange, isDark }) {
  return (
    <div className="toggleContainer">
      <input
        className="toggle"
        id="check"
        type="checkbox"
        onChange={handleChange}
        checked={isDark}
        aria-label="Toggle theme"
      />
      <label htmlFor="check" title="Toggle theme">
        <span className="sr-only">Toggle theme</span>
      </label>
    </div>
  );
}
ThemeToggle.propTypes = {
  handleChange: PropTypes.func,
  isDark: PropTypes.bool,
};
