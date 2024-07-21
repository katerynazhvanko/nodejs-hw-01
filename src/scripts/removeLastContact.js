import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const contactsData = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(contactsData);
    const removeLastContact = contacts.pop();

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log('The last deleted contact -', removeLastContact);
  } catch (error) {
    console.error(error.message);
  }
};

removeLastContact();
