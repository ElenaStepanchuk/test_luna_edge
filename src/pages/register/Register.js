import Container from 'components/container';
import Form from 'components/form';
import css from './register.module.css';
import Progress from 'components/progress';
const Register = () => {
  return (
    <Container>
      <Progress />
      <div className={css.login_wrapper}>
        <h1 className={css.registre_title}>Welcome to Chad</h1>
        <p className={css.registre_text}>
          Go live in 10 minutes! Our self-service widget empowers your customers
          to manage orders and track shipments 24/7 without driving you crazy.
        </p>
        <Form />
        <p className={css.registre_text2}>
          Already have an account?&nbsp;
          <a
            className={css.registre_link}
            href="https://olenatepanchukhw8.netlify.app/login"
          >
            Login
          </a>
        </p>
      </div>
    </Container>
  );
};
export default Register;
