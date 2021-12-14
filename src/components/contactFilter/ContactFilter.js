import PropTypes from 'prop-types';
import s from './ContactFilter.module.css';

const ContactFilter = ({ value, onChange }) => {
  return (
    <label className={s.filterLabel}>
      Find contacts by name:
      <input
        className={s.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactFilter;
