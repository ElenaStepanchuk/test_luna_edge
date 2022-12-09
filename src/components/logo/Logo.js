import logoMobile from '../img/header/сhadMobile.png';
import css from './logo.module.css';

const Logo = () => {
  return (
    <div className={css.logo_wrapper}>
      <img className={css.logo_img} src={logoMobile} alt="log company" />
      <h1 className={css.logo_text}>Chad</h1>
    </div>
  );
};
export default Logo;
