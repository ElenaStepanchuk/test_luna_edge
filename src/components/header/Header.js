import { Outlet } from 'react-router-dom';

import { Navigation, Logo, HeaderContent } from 'components';

import css from './header.module.css';

const Header = () => {
  return (
    <>
      <NavWrapper>
        <Navigation />
      </NavWrapper>
      <div className={css.header_wrapper}>
        <Logo />
        <HeaderContent />
        <Outlet />
      </div>
    </>
  );
};
export default Header;

const NavWrapper = ({ children }) => {
  return (
    <>
      <div className={css.nav_wrapper}>{children}</div>
    </>
  );
};
