import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contactsData = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(contactsData);
    const newContacts = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...contacts, ...newContacts];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.error(error.message);
  }
};

generateContacts(5);
