import React from 'react';

import css from './modalAlreadyConnect.module.css';
import Modal2 from 'components/modal2/Modal2';
import Button from 'components/button/Button';
import avatar2 from '../img/modal/avatar2.svg';
const ModalAlreadyConnect = ({ hiding, clicking }) => {
  return (
    hiding && (
      <div>
        <Modal2>
          <img className={css.avatar1} src={avatar2} alt="avatar" />
          <p className={css.modal_text}>[STORE-NAME] already connected</p>
          <Button click={clicking} marginTop={16}>
            Continue
          </Button>
          <div className={css.modal_connect_btn_wrapper}>
            <p className={css.modal_text}>Wrong store?&nbsp;</p>
            <button className={css.modal_connect_btn} type="button">
              Connect another one
            </button>
          </div>
        </Modal2>
      </div>
    )
  );
};
export default ModalAlreadyConnect;
