import { NavLink } from 'react-router-dom';
import css from './navigation.module.css';

const Navigation = () => {
  return (
    <>
      <NavLink to="welcome">
        <h1 className={css.title}>Welcome</h1>
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
