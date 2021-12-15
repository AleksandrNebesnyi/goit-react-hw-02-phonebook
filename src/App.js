import {Component} from 'react';
import Section from './Section/Section';
import { nanoid } from 'nanoid'
import s from './App'
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';


class App extends Component {
  state ={
    contacts: [
      {
        id: "c7a273d-8bfr-66gr-wef2-4f4d57ea2d0",
        name: "Rosie Simpson",
        number: "459-12-56",
      },
      {
        id: "anctrjd-8bfr-66gr-wef2-4f4d57ea2d0",
        name: "Hermione Kline",
        number: "443-89-12",
      },
      {
        id: "dkt846a-8bfr-66gr-wef2-4f4d57ea2d0",
        name: "Eden Clements",
        number: "645-17-79",
      },
      {
        id: "hr7y3td-8bfr-66gr-wef2-4f4d57ea2d0",
        name: "Annie Copeland",
        number: "227-91-26",
      },
    ],
     }

     // Добавляет контакт (желательно сократить или вынести)
  addContact = newContact => {
    // Проверка на дубликат
    const duplicateName = this.state.contacts.find(
      contact => contact.name === newContact.name,
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
    this.setState({ filter: event.currentTarget.value });
  };

  // Фильтрует и возвращает результат фильтра
  filterContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  // Удаляет контакт
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  

  render ()


  {
    return (
      <Section title="Phonebook">
      <ContactForm onSubmit={this.addContact} />
      <h2 className={s.title}> Contacts </h2>
      <ContactList 
      contacts={this.state.contacts}  
      onDeleteContact={this.deleteContact}/>

      </Section>
      
        
      
    )
  }

}




export default App;
