import { Button } from 'pages/common.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth.selectors';
import { logoutThunk } from 'redux/auth/auth.thunk';
import { GreetingTitle, Header, NavItem, UserEmail } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <Header>
      {user ? (
        <>
          <GreetingTitle>Welcome back, {user.name} </GreetingTitle>
          <UserEmail>{user.email}</UserEmail>
          <Button type="button" onClick={handleLogout}>
            Log out
          </Button>
        </>
      ) : (
        <>
          <GreetingTitle>We are happy to see you again!</GreetingTitle>
          <NavItem to="signup">Sign Up</NavItem>
          <NavItem to="login">Log In</NavItem>
        </>
      )}
    </Header>
  );
};
