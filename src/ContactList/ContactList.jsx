import { Component } from "react";
import {List} from './ContactList.styled';
import PropTypes from 'prop-types';
import ContactItem from "../ContactItem/ContactItem";


// Принимает все контакты и пробрасывает дальше метод для удаления контакта
class ContactList extends Component {


render()
{
    
    const contacts =this.props.contacts;
    const deleteContact = this.props.onDeleteContact;


    return (
        <List>
      {contacts.map(contact => (
        <ContactItem
        key={contact.id}
        contact={contact}
        onDeleteContact={deleteContact}
        />
      ))}
    </List>
    )
}
}



ContactList.propTypes ={
    onDeleteContact :PropTypes.func,

}

export default ContactList;



