import css from './listStyles.module.css';

const TextComponent = ({ children }) => {
  return <p className={css.text_item}>{children}</p>;
};

export default TextComponent;
