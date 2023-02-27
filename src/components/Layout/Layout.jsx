import { UserMenu } from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainContainer } from './Layout.styled';

const Layout = () => {
  return (
    <MainContainer>
      <UserMenu />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};

export default Layout;
