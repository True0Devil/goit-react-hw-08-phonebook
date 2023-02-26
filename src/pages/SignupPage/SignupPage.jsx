import { useState } from 'react';
import { toast } from 'react-toastify';
import { publicAPI } from 'services/auth.services';

const initialState = {
  name: '',
  surname: '',
  email: '',
  password: '',
};

const SignupPage = () => {
  const [userData, setUserSata] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserSata(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      //   setIsLoading(true);
      await publicAPI.post('users/signup', {
        name: `${userData.name} ${userData.surname}`,
        email: userData.email,
        password: userData.password,
      });

      // {name: "dan dan", email: "qqwe@gmail.com", password: "1234567"}
      //   setIsLoading(false);
      toast.success('Success!');
    } catch (e) {
      console.log(e);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Name
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={userData.name}
          />
        </label>

        <label htmlFor="">
          Surname
          <input
            type="text"
            name="surname"
            onChange={handleChange}
            value={userData.surname}
          />
        </label>

        <label htmlFor="">
          Email
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
        </label>

        <label htmlFor="">
          Password
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={userData.password}
          />
        </label>

        <button type="submit">Create new Account</button>
      </form>
    </>
  );
};

export default SignupPage;
