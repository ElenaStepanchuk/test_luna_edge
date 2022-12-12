import css from './text.module.css';

const Text = ({ children }) => {
  return <p className={css.text}>{children}</p>;
};
export default Text;
