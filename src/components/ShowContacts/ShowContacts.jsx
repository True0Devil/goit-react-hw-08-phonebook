import { List, Item, Button } from './ShowContacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from 'redux/contacts/contacts.thunk';
import { useEffect } from 'react';
import { selectVisibleContacts } from 'redux/selectors';

export const ShowContacts = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const onDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <List>
      {contacts.map(contact => (
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
