import { AddContact } from './AddContact/AddContact';
import { ShowContacts } from './ShowContacts/ShowContacts';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';
import { ToastContainer } from 'react-toastify';
import SignupPage from 'pages/SignupPage/SignupPage';
import LoginPage from 'pages/LoginPage/LoginPage';



export const App = () => {
  return (
    <>
      <SignupPage />
      <LoginPage />
      <Section title="Phonebook">
        <AddContact />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ShowContacts />
      </Section>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={3}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
