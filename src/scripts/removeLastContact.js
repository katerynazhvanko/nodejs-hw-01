import { getAllContacts } from './getAllContacts.js';
import updateContacts from './updateContacts.js';

export const removeLastContact = async () => {
  const contacts = await getAllContacts();
  contacts.pop();
  await updateContacts(contacts);
};

removeLastContact();
