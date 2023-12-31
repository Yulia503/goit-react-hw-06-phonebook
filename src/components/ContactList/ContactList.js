import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledNotification } from 'components/Notification.styled';
import { useSelector } from 'react-redux';
import { ContactsList, ContactsListItem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      {filteredContacts.length > 0 ? (
        <ContactsList>
          {filteredContacts.map(contact => (
            <ContactsListItem key={contact.id}>
              <ContactListItem contact={contact} />
            </ContactsListItem>
          ))}
        </ContactsList>
      ) : (
        <StyledNotification>
          YOU DON'T HAVE A FRIEND WITH THIS NAME, PLEASE ADD SOME CONTACT TO THE PHONEBOOK!
        </StyledNotification>
      )}
    </>
  );
};
