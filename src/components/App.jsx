import { AddContact } from './AddContact/AddContact';
import { ShowContacts } from './ShowContacts/ShowContacts';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import shortid from 'shortid';
import { useState } from 'react';
import { useEffect } from 'react';

const initialContacts = [
  { id: 'id-1', name: 'Gabe Newell', number: '459-12-56' },
  { id: 'id-2', name: 'Scammerino', number: '8-800-555-35-35' },
  { id: 'id-3', name: 'Commander Sheppard', number: '645-17-79' },
  { id: 'id-4', name: 'Quentin Tarantino', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('загрузили в локал сторэдж');
    contacts.length || setContacts(initialContacts);
  }, [contacts]);

  const handleFilterChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const getVisibleContacts = () => {
    const normalizedQuery = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedQuery)
    );
  };

  const addContact = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    checkForDoubleContact(newContact);
  };

  const checkForDoubleContact = newContact => {
    const normalizedNewName = newContact.name.toLowerCase();

    contacts.some(contact => contact.name.toLowerCase() === normalizedNewName)
      ? alert(`${newContact.name} is already in your contacts`)
      : setContacts(prev => [newContact, ...prev]);
  };

  return (
    <>
      <Section title="Phonebook">
        <AddContact addContact={addContact} />
      </Section>

      <Section title="Contacts">
        <Filter onChange={handleFilterChange} filter={filter} />
        <ShowContacts contacts={getVisibleContacts()} onDelete={handleDelete} />
      </Section>
    </>
  );
};
