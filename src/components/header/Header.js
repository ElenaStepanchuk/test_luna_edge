import { Outlet } from 'react-router-dom';
import { Navigation, Logo, Container } from 'components';

import css from './header.module.css';

const Header = () => {
  return (
    <header className={css.header_container}>
      <Container>
        <NavWrapper>
          <Navigation />
        </NavWrapper>
        <div>
          <Logo />
          <Outlet />
        </div>
      </Container>
    </header>
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
