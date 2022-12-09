import css from './form.module.css';
const Form = () => {
  return (
    <>
      <form className={css.form_wrapper}>
        <label className={css.form_label}>
          Email
          <input
            className={css.form_input}
            placeholder="megachad@trychad.com"
          ></input>
        </label>
        <label className={css.form_label}>
          Your name
          <input
            className={css.form_input}
            type="text"
            name="name"
            placeholder="Mega Chad"
          ></input>
        </label>
        <label className={css.form_label}>
          Password
          <input
            className={css.form_input}
            placeholder="Enter password"
          ></input>
        </label>
        <button className={css.form_button} type="submit">
          Create account
        </button>
      </form>
    </>
  );
};
export default Form;
