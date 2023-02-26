import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/auth/auth.thunk';

const initialState = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const [userData, setUserSata] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setUserSata(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      //   setIsLoading(true);
      await dispatch(loginThunk(userData));

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
          E-mail
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

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
