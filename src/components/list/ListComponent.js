import css from './listStyles.module.css';

const ListComponent = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

export default ListComponent;
