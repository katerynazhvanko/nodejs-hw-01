import { getAllContacts } from './getAllContacts.js';
import { countContacts } from './countContacts.js';
import updateContacts from './updateContacts.js';

export const removeRandomContact = async () => {
  const countAllContacts = await countContacts();
  const randomContact = Math.floor(Math.random() * countAllContacts);
  console.log(randomContact);
  const contacts = await getAllContacts();
  const updatedContacts = contacts.filter(
    (contact, idx) => idx !== randomContact,
  );
  await updateContacts(updatedContacts);
  return console.log(updatedContacts);
};

removeRandomContact();
