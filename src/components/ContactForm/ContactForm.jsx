import {Component} from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'
import {Form, Label, Input, Button} from './ContactForm.styled'



class ContactForm extends Component {
    // PropTypes как статическое свойство
    static propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };
  
    // Стейт формы
    state = {
      name: '',
      number: '',
    };
  
    // Метод, наблюдающий за инпутами и записывающий в стейт их значения
    hanldeChange = event => {
      const { name, value } = event.currentTarget;
  
      this.setState({
        [name]: value,
      });
    };
  
    // Метод на отправке формы. Формирует из стейта контакт и передает во внешний метод
    hanldeSubmit = event => {
      event.preventDefault();
  
      const contact = {
        id: nanoid(),
        name: this.state.name,
        number: this.state.number,
      };
  
      this.props.onSubmit(contact); // Внешний метод в пропсах класса
  
      this.resetForm();
    };
  
    // Сброс полей формы (после отправки)
    resetForm = () => {
      this.setState({
        id: '',
        name: '',
        number: '',
      });
    };
  
    render() {
      return (
        <Form onSubmit={this.hanldeSubmit}>
          <Label >
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name} // Пишем значение в стейт
              onChange={this.hanldeChange} // Наблюдающий метод
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </Label>
          <Label >
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number} // Пишем значение в стейт
              onChange={this.hanldeChange} // Наблюдающий метод
              pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
              title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
              required
            />
          </Label>
         
            <Button type="submit" >
              Add contact
            </Button>
          
        </Form>
      );
    }
  }




  
  export default ContactForm;