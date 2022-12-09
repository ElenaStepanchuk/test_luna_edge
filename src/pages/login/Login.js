import React, { useState, useEffect } from 'react';

import Container from 'components/container';
import Form from 'components/form';
import css from './login.module.css';
import Progress from 'components/progress';
const Login = () => {
  return (
    <Container>
      <Progress />
      <div className={css.register_wrapper}>
        <h1 className={css.login_title}>Welcome to Chad</h1>
        <p className={css.login_text}>Welcome to Chard again!</p>
        <Form />
        <p className={css.login_text2}>
          Already have an account?&nbsp;
          <a
            className={css.login_link}
            href="https://olenatepanchukhw8.netlify.app/login"
          >
            Register
          </a>
        </p>
      </div>
    </Container>
  );
};
export default Login;
