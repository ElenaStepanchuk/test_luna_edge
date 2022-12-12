import css from './button.module.css';
const Button = ({ children, click }) => {
  return (
    <button className={css.button} type="submit" onClick={click}>
      {children}
    </button>
  );
};
export default Button;
