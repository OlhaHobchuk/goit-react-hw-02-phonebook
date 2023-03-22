import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ onFilterChange }) => {
  return (
    <label className={css.filterTitle}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        onChange={onFilterChange}
      />
    </label>
  );
};

Filter.prototype = {
  onFilterChange: PropTypes.func.isRequired,
};
