import { Component } from 'react';
import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import ContactsFilter from './components/ContactsFilter/ContactsFilter';

class App extends Component {
  state = {
    contacts: [
      {
        id: 'c7a273d-8bfr-66gr-wef2-4f4d57ea2d0',
        name: 'Rosie Simpson',
        number: '459-12-56',
      },
      {
        id: 'anctrjd-8bfr-66gr-wef2-4f4d57ea2d0',
        name: 'Hermione Kline',
        number: '443-89-12',
      },
      {
        id: 'dkt846a-8bfr-66gr-wef2-4f4d57ea2d0',
        name: 'Eden Clements',
        number: '645-17-79',
      },
      {
        id: 'hr7y3td-8bfr-66gr-wef2-4f4d57ea2d0',
        name: 'Annie Copeland',
        number: '227-91-26',
      },
    ],
    filter: '',
  };

  // Добавляет контакт
  addContact = newContact => {
    // Проверка на дубликат
    const duplicateName = this.state.contacts.sort(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (duplicateName) {
      alert(`${newContact.name} is already on contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  // Следит за полем фильтрации и пишет в стейт
  changeFilter = event => {
    event.preventDefault();
    this.setState({ filter: event.target.value });
    console.log(event.target.value);
  };

  // Фильтрует и возвращает результат фильтра
  filterContacts = () => {
    const { contacts, filter } = this.state;
    console.log(this.state);
    const normalizedFilter = filter.toLowerCase();

    if (filter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
      );
    } else {
      return contacts;
    }
  };

  // Удаляет контакт
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <ContactsFilter
            filter={this.state.filter}
            onFilter={this.changeFilter}
          />
          <ContactList
            contacts={this.filterContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
