import { NavLink } from 'react-router-dom';
import css from './navigation.module.css';

const Navigation = () => {
  return (
    <>
      <NavLink to="register">
        <h1 className={css.title}>Register</h1>
      </NavLink>
      <NavLink to="login">
        <h1 className={css.title}>Login</h1>
      </NavLink>
      <NavLink to="connectShopifyStore">
        <h1 className={css.title}>connectShopifyStore</h1>
      </NavLink>
      <NavLink to="connectCustomer">
        <h1 className={css.title}>connectCustomer</h1>
      </NavLink>
    </>
  );
};
export default Navigation;
