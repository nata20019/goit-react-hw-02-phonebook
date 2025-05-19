import { ContactsItem } from './ContactsItem';

export const ContactsList = ({ contacts }) => {
  return (
    <div className="p-group" role="group" aria-label="Basic example">
      <ul className="w-list">
        {contacts.map(contact => (
          <ContactsItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
