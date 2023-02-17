import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://63ee8089d466e0c18bb10bc8.mockapi.io/';

// function checkForDoubleContact(newContact, allContacts) {
//   const contactAlredyExists = allContacts.some(
//     item => item.name.toLowerCase() === newContact.name.toLowerCase()
//   );

//   if (contactAlredyExists) {
//     return alert(`${newContact.name} is already in your contacts`);
//   }
// }

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
    const { data } = await axios.get(BASE_URL + 'contacts');
    return data;
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios.post(BASE_URL + 'contacts', contact);
    return response.data;
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await axios.delete(BASE_URL + 'contacts/' + id);
    return response.data;
  }
);
