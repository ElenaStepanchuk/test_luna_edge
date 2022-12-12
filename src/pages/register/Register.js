import { Container, Title, Text, FormRegister } from 'components';
// import FormRegister from '../../components/formRegister/FormRegister';
import css from './register.module.css';
import Progress from 'components/progress';
const Register = () => {
  const progress = 1;
  return (
    <Container>
      <Progress completed={progress} />
      <div className={css.login_wrapper}>
        <Title>Welcome to Chad</Title>
        <Text>
          Go live in 10 minutes! Our self-service widget empowers your customers
          to manage orders and track shipments 24/7 without driving you crazy.
        </Text>
        <FormRegister />
        <p className={css.registre_text2}>
          Already have an account?&nbsp;
          <a className={css.registre_link} href="http://localhost:3000/login">
            Login
          </a>
        </p>
      </div>
    </Container>
  );
};
export default Register;
