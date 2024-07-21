import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    const newContact = createFakeContact();
    const updatedContacts = [...JSON.parse(contacts), newContact];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.error(error.message);
  }
};

addOneContact();
