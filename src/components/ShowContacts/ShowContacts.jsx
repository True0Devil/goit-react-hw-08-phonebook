import { List, Item, Button } from './ShowContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts.slice';

export const ShowContacts = () => {
  const contacts = useSelector(state => state.contacts.data);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const getVisibleContacts = () => {
    const normalizedQuery = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedQuery)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <Button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};
