import { AddContact } from './AddContact/AddContact';
import { ShowContacts } from './ShowContacts/ShowContacts';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <AddContact />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ShowContacts />
      </Section>
    </>
  );
};
