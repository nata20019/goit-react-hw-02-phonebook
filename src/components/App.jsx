import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsSearch from './ContactsSearch';
import ContactsList from './ContactsList';
import contactsJson from '../assets/contacts.json';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: contactsJson,
    filter: '',
  };
  handleAddContact = newContact => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
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
          <ContactForm onAddContact={this.handleAddContact} />
        </Section>
        <Section title="Contacts">
          <ContactsSearch />
          <ContactsList contacts={contacts} onDelete={this.handleDelete} />
        </Section>
      </div>
    );
  }
}
