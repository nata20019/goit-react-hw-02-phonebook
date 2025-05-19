import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsSearch from './ContactsSearch';
import ContactsList from './ContactsList';
import contactsJson from '../assets/contacts.json';
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: contactsJson,
    filter: '',
    name: '',
    number: '',
  };

  handleDelete = id => {
    this.setState(prevState => {
      const newContactsList = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return { contacts: newContactsList };
    });
  };
  render() {
    const { contacts } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          margin: 100,
        }}
      >
        React homework template
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <ContactsSearch />
          <ContactsList contacts={contacts} />
        </Section>
      </div>
    );
  }
}
