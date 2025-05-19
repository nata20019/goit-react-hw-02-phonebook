import ContactsList from './components/ContactsList';
import ContactsSearch from './components/ContactsSearch';
import contactsJson from '../../../assets';

export const Contacts = () => {
  return (
    <>
      <ContactsSearch />
      <ContactsList contacts={contactsJson} />
    </>
  );
};
export default Contacts;
