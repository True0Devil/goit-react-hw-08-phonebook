import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  max-width: 200px;

  padding: 30px;
  padding-bottom: 0;

  background-color: #e5e5e5;
  height: calc(100vh - 30px);
  text-align: right;
`;

export const GreetingTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 35px;
`;

export const NavItem = styled(NavLink)`
  margin-bottom: 8px;
  display: block;
  text-decoration: none;

  font-size: 20px;
  color: #000000;

  &.active {
    font-style: italic;
    text-decoration: underline 2px solid tomato;
  }
`;
export const UserEmail = styled.p`
  margin: 0;
  margin-bottom: 28px;

  font-style: italic;
`;
