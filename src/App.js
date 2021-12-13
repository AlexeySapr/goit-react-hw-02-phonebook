import React from 'react';
import './App.css';
import Container from './components/container/Container';
import Section from './components/section/Section';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div className="App">
        <h1 className="AppHeader">Phonebook</h1>
        <Container>
          <Section title={'Phonebook'}></Section>
          <Section title={'Contacts'}></Section>
        </Container>
      </div>
    );
  }
}

export default App;
