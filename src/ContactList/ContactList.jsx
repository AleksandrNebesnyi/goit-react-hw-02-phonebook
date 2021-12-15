import { Component } from "react";
import {} from './ContactList.styled';
import PropTypes from 'prop-types';
import ContactItem from "../ContactItem/ContactItem";



class ContactList extends Component {


render()
{
    const contacts = this.props.contacts;
    const deleteContact = this.props.onDelete;


    return (
        <ul>
      {contacts.map(contact => (
        <ContactItem
        key={contact.id}
         id={contact.id}
         name={contact.name}
         number={contact.number}
        onDeleteContact={deleteContact}
        />
      ))}
    </ul>



    )



}



}


export default ContactList;

// class ContactList extends Component {
//     render() {
//       const contacts = this.props.contacts;
//       const deleteContact = this.props.onDelete;
//       return (
//         <ul className={Style.contacrList}>
//           {contacts.map((contact) => (
//             <Contact
//               key={contact.id}
//               id={contact.id}
//               name={contact.name}
//               number={contact.number}
//               onDeleteContact={deleteContact}
//             />
//           ))}
//         </ul>
//       );
//     }
//   }
//   ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.string,
//         name: PropTypes.string,
//         number: PropTypes.string,
//       })
//     ).isRequired,
//     onDelete: PropTypes.func.isRequired,
//   };