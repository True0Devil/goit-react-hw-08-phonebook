import { AddContact } from 'components/AddContact/AddContact';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { ShowContacts } from 'components/ShowContacts/ShowContacts';
import { MainContent } from './ContactsPage.styled';

const ContactsPage = () => {
  return (
    <MainContent>
      <div>
        <Section title="Phonebook">
          <AddContact />
        </Section>

        <Section title="Contacts">
          <Filter />
          <ShowContacts />
        </Section>
      </div>
    </MainContent>
  );
};

export default ContactsPage;
