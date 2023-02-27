import {
  Form,
  Input,
  Label,
  Button,
  Title,
  Container,
} from 'pages/common.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { loginThunk } from 'redux/auth/auth.thunk';
import { MainContainer } from './LoginPage.styled';

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
      dispatch(loginThunk(userData));
      //   setIsLoading(false);
      toast.success('Successfully logged in!');
    } catch (e) {
      console.log(e);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <MainContainer>
      <Container>
        <Title>Please log in to enter your own personal phonebook</Title>
        <Form action="" onSubmit={handleSubmit}>
          <Label htmlFor="">
            E-mail
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={userData.email}
              placeholder="Enter your e-mail"
            />
          </Label>
          <Label htmlFor="">
            Password
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={userData.password}
              placeholder="Enter your password"
            />
          </Label>

          <Button type="submit">Log in</Button>
        </Form>
      </Container>
    </MainContainer>
  );
};

export default LoginPage;
