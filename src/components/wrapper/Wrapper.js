import css from './wrapper.module.css';
const Wrapper = ({ children }) => {
  return (
    <>
      <div className={css.wrapper}>{children}</div>
    </>
  );
};
export default Wrapper;
