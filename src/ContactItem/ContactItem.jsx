
  
import {Component} from 'react';
import PropTypes from 'prop-types';
import {Item, Name, Number, Button} from './ContactItem.styled'


// Принимает один контакт и метод для удаления контакта
class ContactItem extends Component {

    render(){
        const { id, name, number  } = this.props.contact;
        const onDeleteContact=this.props.onDeleteContact;
        return (

            <Item>
              <Name>{name}: </Name>
                   <Number href={`tel:${number}`} >
                      {number}
                    </Number>
                    <Button
                      
                       type="button"
                       onClick={() => onDeleteContact(id)} // Метод на клике, принимает ID контакта
                     >
                      Delete
                     </Button>
                  </Item>


        )
    }

}

ContactItem.propTypes ={
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDeleteContact: PropTypes.func.isRequired,

}

export default ContactItem;

