import React, { useState } from 'react';

import css from './formRegister.module.css';
import { Button } from 'components';
import showPassword from '../img/registerLogin/showPasswordSvg.svg';
import notShowPassword from '../img/registerLogin/notShowPasswordSvg.svg';

const FormRegister = () => {
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(notShowPassword);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  function Show() {
    if (type === 'password') {
      setType('text');
      setIcon(showPassword);
    } else {
      setType('password');
      setIcon(notShowPassword);
    }
  }

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const HandleSubmit = event => {
    event.preventDefault();
    console.log(email, name, password);
    reset();
  };

  const reset = () => {
    setEmail('');
    setName('');
    setPassword('');
  };

  return (
    <>
      <form className={css.form_wrapper}>
        <label className={css.form_label}>
          Email
          <input
            className={css.form_input}
            value={email}
            type="email"
            name="email"
            placeholder="megachad@trychad.com"
            pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
            minLength="5"
            maxLength="30"
            required
            onChange={handleInputChange}
          ></input>
        </label>
        <label className={css.form_label}>
          Your name
          <input
            className={css.form_input}
            value={name}
            type="text"
            name="name"
            placeholder="Mega Chad"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            minLength="3"
            maxLength="30"
            required
            onChange={handleInputChange}
          ></input>
        </label>
        <label className={css.form_label}>
          Password
          <input
            className={css.form_input}
            value={password}
            placeholder="Enter password"
            type={type}
            name="password"
            minLength="8"
            maxLength="10"
            required
            onChange={handleInputChange}
          ></input>
          <button className={css.show_button} type="button" onClick={Show}>
            <img className={css.show_icon} src={icon} alt="show password" />
          </button>
        </label>
        <Button click={HandleSubmit}>Create account</Button>
      </form>
    </>
  );
};
export default FormRegister;
