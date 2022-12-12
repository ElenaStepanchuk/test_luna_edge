import css from './listStyles.module.css';

const TitleComponent = ({ children }) => {
  return <h2 className={css.title_item}>{children}</h2>;
};

export default TitleComponent;
