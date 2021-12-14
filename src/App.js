import React from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Container from './components/container/Container';
import Section from './components/section/Section';
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';
import initData from './tempData/data.json';
import ContactFilter from './components/contactFilter/ContactFilter';

class App extends React.Component {
  state = {
    contacts: initData,
    filter: '',
  };

  isInContacts = ({ name, number }) => {
    const normalizedName = name.toLowerCase().replace(/\s+/g, '');
    const normalizedNumber = number.replace(/\D/g, '');
    console.log(normalizedNumber);
    return this.state.contacts.some(contact => {
      return (
        contact.name.toLowerCase().replace(/\s+/g, '') === normalizedName ||
        contact.number.replace(/\D/g, '') === normalizedNumber
      );
    });
  };

  addContact = newContact => {
    const { name, number } = newContact;

    if (this.isInContacts(newContact)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  delContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
      <div className="App">
        <h1 className="AppHeader">Phonebook</h1>
        <Container>
          <Section title={'Phonebook'}>
            <ContactForm handleSubmit={this.addContact} />
          </Section>

          <Section title={'Contacts'}>
            <ContactFilter
              value={this.state.filter}
              onChange={this.filterChange}
            />
            <ContactList
              contacts={filteredContacts}
              onDeleteContact={this.delContact}
            />
          </Section>
        </Container>
      </div>
    );
  }
}

export default App;
