import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth.selectors';

export const PublicRoute = () => {
  const userIsLoggedIn = useSelector(selectAuthToken);

  return userIsLoggedIn ? <Navigate to="/contacts" replace /> : <Outlet />;
};
