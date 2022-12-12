import css from './button.module.css';
const Button = ({ children, click, marginTop }) => {
  return (
    <button
      className={css.button}
      style={{ marginTop }}
      type="submit"
      onClick={click}
    >
      {children}
    </button>
  );
};
export default Button;
