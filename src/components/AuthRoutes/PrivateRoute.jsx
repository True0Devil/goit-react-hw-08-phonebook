import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuthToken } from 'redux/auth/auth.selectors';

export const PrivateRoute = () => {
  const userIsLoggedIn = useSelector(selectAuthToken);

  return userIsLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};
