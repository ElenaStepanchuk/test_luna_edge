import css from './loader.module.css';
const Loader = () => {
  return (
    <div className={css.container}>
      <div className={css.box}>
        <div className={css.loader}>
          <span></span>
        </div>
        <div className={css.loader}>
          <span></span>
        </div>
        <div className={css.loader}>
          <i></i>
        </div>
        <div className={css.loader}>
          <i></i>
        </div>
      </div>
    </div>
  );
};
export default Loader;
