import React, { Component } from 'react';
import shortid from 'shortid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const isOnContacts = this.state.contacts.find(item => {
      return item.name === contact.name;
    });
    if (isOnContacts) {
      return alert(`${name} is already in contacts`);
    }

    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  filterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
  };
  render() {
    const { contacts } = this.state;
    const filteredContact = this.getFilteredContacts();

    return (
      <div
        style={{
          padding: '20px',
          width: '500px',
          borderStyle: 'solid',
          borderColor: 'grey',
          borderWidth: '2px',
          borderRadius: '10px',
        }}
      >
        <h1 style={{ marginTop: 0 }}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>

        {contacts.length ? (
          <>
            <Filter onFilterChange={this.filterChange} />
            <ContactList
              contacts={filteredContact}
              onDeleteContact={this.deleteContact}
            />
          </>
        ) : (
          <Notification message="There is no contacts" />
        )}
      </div>
    );
  }
}
