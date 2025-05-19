import { ContactsItem } from './ContactsItem';
import PropTypes from 'prop-types';

export const ContactsList = ({ contacts, onDeLete }) => {
  return (
    <div className="p-group" role="group" aria-label="Basic example">
      <ul className="w-list">
        {contacts.map(contact => (
          <ContactsItem
            key={contact.id}
            contact={contact}
            onDeLete={onDeLete}
          />
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsList;
