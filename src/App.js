import React from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Container from './components/container/Container';
import Section from './components/section/Section';
import ContactForm from './components/contactForm/ContactForm';
import ContactList from './components/contactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [],
  };

  addContact = newContact => {
    const { name, number } = newContact;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <div className="App">
        <h1 className="AppHeader">Phonebook</h1>
        <Container>
          <Section title={'Phonebook'}>
            <ContactForm handleSubmit={this.addContact} />
          </Section>

          <Section title={'Contacts'}>
            <ContactList contacts={this.state.contacts} />
          </Section>
        </Container>
      </div>
    );
  }
}

export default App;
