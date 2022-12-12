import css from './listStyles.module.css';

const ItemComponent = ({ children }) => {
  return <li className={css.item}>{children}</li>;
};

export default ItemComponent;
