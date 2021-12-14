import PropTypes from 'prop-types';

const ContactListItem = ({ name }) => {
  return (
    <li>
      <p>{name}</p>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ContactListItem;
