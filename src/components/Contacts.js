import React, { useState } from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { useInput } from '../utils/hooks';
import './Contacts.scss';

function Contacts(props) {
  const filter = useInput('');
  const number = usePhoneNumber('');
  const contacts = useContacts(props.contacts, number, props);

  return (
    <div className="contacts-page">
     <div className="number">
        <span>ENTER NUMBER: </span>
        <input className="number" { ...number.phoneInput } />
        <span className="add-contact" onClick={contacts.addContact}>ADD</span>
      </div>
      <div className="filter">
        <span>FILTER BY: </span>
        <input className="filter" { ...filter } />
      </div>
      <div className="contacts-container">
        {contacts.value ?
          contacts.value.map((contact, index) => {
            const { value: filterText } = filter;
            if (filterText.length && contact.get('name').toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
              return false;
            }

            const contactClasses = ['contact-item'];
            if (contact.get('error')) {
              contactClasses.push('error');
            }

            return (
              <div className={contactClasses.join(' ')} key={index}>
                <div>{contact.get('name')}</div>
                <div>{contact.get('number')}</div>
                <div>{contact.get('context')}</div>
              </div>
            );
          })
          : "LOADING..."
        }
      </div>
    </div>
  );
}

function usePhoneNumber(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  return {
    phoneInput: {
      value,
      onChange: (e) => {
        const { value } = e.target;

        const numbersEntered = value.replace(/\D/g, '');
        const numbersEnteredLength = numbersEntered.length;

        let phoneNumber = ''; // formatted
        if (numbersEnteredLength > 0) {
          phoneNumber += `(${numbersEntered.slice(0, 3)}`;
          
          if (numbersEnteredLength > 3) {
            phoneNumber += `) ${numbersEntered.slice(3, 6)}`;
            
            if (numbersEnteredLength > 6) {
              phoneNumber += `-${numbersEntered.slice(6, 10)}`;
            }
          }
        }

        setValue(phoneNumber);
      },
    },
    value,
    clear() {
      setValue('');
    }
  }
}

function useContacts(contacts, number, props) {
  if (!contacts.size) {
    props.getContacts();
  }

  return {
    value:
      contacts.reduce((contactsAcc, contact) => {
        const digits = contact.get('number').replace(/[^A-Za-z0-9]/g, '')
        let preparedContact = contact;
        if (digits.length !== 11 && digits.length !== 12) { //if it has +# or +## intl prefix before the 10 digits
          preparedContact = preparedContact.set('error', true); // error state contacts shown in red
        } else {
          // find length of international prefix by counting digits
          const intlPrefixLength = digits.length === 11 ? 1 : 2;
          preparedContact = preparedContact.set('number', gete164Number(digits.slice(intlPrefixLength)));
        }

        return contactsAcc.push(preparedContact);
      }, List()),
    addContact(e) {
      props.addContact(number.value);
      number.clear();
    },
  }
}

// n param is 'numbers' (for shorter syntax)
function gete164Number(n) {
  return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
}

export default connect(
  (state) => ({ contacts: state.get('contacts') }),
  (dispatch) => ({
    getContacts() {
      dispatch({ type: 'getContacts' });
    },
    addContact(number) {
      dispatch({type: 'addContact', data: { number } });
    },
  }),
)(Contacts);
