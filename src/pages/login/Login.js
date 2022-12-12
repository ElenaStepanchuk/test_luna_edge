import React, { useState, useEffect } from 'react';

import { Container, Title, Text, FormLogin } from 'components';
import css from './login.module.css';
import Progress from 'components/progress';
const Login = () => {
  const progress = 1;
  return (
    <Container>
      <Progress completed={progress} />
      <div className={css.register_wrapper}>
        <Title>Welcome back</Title>
        <Text>Feeling ready to take on the day? Chad is too!</Text>
        <FormLogin />
        <p className={css.login_text2}>
          Don’t have an account?&nbsp;
          <a className={css.login_link} href="http://localhost:3000/register">
            Join the waitlist
          </a>
        </p>
      </div>
    </Container>
  );
};
export default Login;
