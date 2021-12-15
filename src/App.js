import {Component} from 'react';
import Section from './Section/Section';
import { nanoid } from 'nanoid'
import s from './App'
import ContactForm from './ContactForm/ContactForm';


class App extends Component {
  state ={
    contacts: [],
    name: ''
  }


  addContact = text =>{
    const contact = {
      id:nanoid(),
      text,
    }

    this.setState(({contacts})=>({
      contacts : [contact, ...contacts]
    }))
  }


  deleteContact = contactId=>{
    this.setState(prevState=>({
      contacts: prevState.contacts.filter(contact=>contact.id !==contactId)
    }))
  }
  // Метод, наблюдающий за инпутами и записывающий в стейт их значения
  hanldeChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  render ()

  {
    return (
      <Section title="Phonebook">
        <ContactForm onSabmit= {this.addContact}/>
  <h2 className={s.title}> Contacts </h2>
      </Section>
      
        
      
    )
  }

}




export default App;
