import PropTypes from 'prop-types';

import ContactListItem from './ContactListItem';

const ContactList = ({ contacts }) => {
  return (
    <ul className="contactList">
      {contacts.map(contact => (
        <ContactListItem key={contact.id} name={contact.name} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default ContactList;
