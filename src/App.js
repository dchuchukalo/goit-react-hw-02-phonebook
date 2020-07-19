import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';

import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    const newContact = { id: uuidv4(), ...data };

    this.findAlreadyInContacts(newContact);
  };

  findAlreadyInContacts = newContact => {
    const name = newContact.name.toLowerCase();

    if (name === '') {
      alert(`Please enter name and number`);
      return;
    }

    if (
      this.state.contacts.find(contact => contact.name.toLowerCase() === name)
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return (
      <>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2 className={styles.title}>Contacts</h2>
        {contacts.length > 1 && (
          <Filter value={filter} onChange={this.changeFilter} />
        )}
        {contacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        ) : (
          <p>The contact list is empty. Please add a new contact.</p>
        )}
      </>
    );
  }
}

export default App;
