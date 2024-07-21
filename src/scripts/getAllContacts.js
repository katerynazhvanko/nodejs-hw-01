import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  try {
    const contacts = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(contacts);
  } catch (error) {
    console.error(error.message);
  }
};

console.log(await getAllContacts());
