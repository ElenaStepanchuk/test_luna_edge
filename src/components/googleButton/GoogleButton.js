import css from './googleButton.module.css';
import googleIcon from '../img/googleIcon/googleIcon.png';

const GoogleButton = () => {
  return (
    <>
      <button className={css.button_google} type="submit">
        <div className={css.button_google_icon_container}>
          <img
            className={css.icon_button_google}
            src={googleIcon}
            alt="google icon"
          />
        </div>
        <div className={css.button_google_text_container}>
          Connect Gmail account
        </div>
      </button>
    </>
  );
};
export default GoogleButton;

/* <button className={css.button_google} type="submit"></button> */
