import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signupThunk } from 'redux/auth/auth.thunk';
import { MainContainer } from './SignupPage.styled';
import {
  Form,
  Input,
  Label,
  Button,
  Title,
  Container,
} from 'pages/common.styled';

const initialState = {
  name: '',
  surname: '',
  email: '',
  password: '',
};

const SignupPage = () => {
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
      dispatch(
        signupThunk({
          name: `${userData.name} ${userData.surname}`,
          email: userData.email,
          password: userData.password,
        })
      );
      //   setIsLoading(false);
      toast.success('Successfully signed up!');
    } catch (e) {
      console.log(e);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <MainContainer>
      <Container>
        <Title>Join now!</Title>
        <Form action="" onSubmit={handleSubmit}>
          <Label htmlFor="">
            Name
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              value={userData.name}
            />
          </Label>

          <Label htmlFor="">
            Surname
            <Input
              type="text"
              name="surname"
              onChange={handleChange}
              value={userData.surname}
            />
          </Label>

          <Label htmlFor="">
            Email
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={userData.email}
            />
          </Label>

          <Label htmlFor="">
            Password
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={userData.password}
            />
          </Label>

          <Button type="submit">Create new Account</Button>
        </Form>
      </Container>
    </MainContainer>
  );
};

export default SignupPage;
