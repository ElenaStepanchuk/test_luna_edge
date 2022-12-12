import React, { useState } from 'react';

import css from './modalStoreConnect.module.css';
import Modal from 'components/modal/Modal';
import Button from 'components/button/Button';
import avatar1 from '../img/modal/avatar1.svg';
const ModalStoreConnect = ({ hide, click }) => {
  const [isShowing, setIsShowing] = useState(true);

  // const HandleTogleModal = () => {
  //   if (isShowing === true) {
  //     setIsShowing(false);
  //     console.log('333', isShowing);
  //   } else {
  //     setIsShowing(true);
  //     console.log('444', isShowing);
  //   }
  // };

  return (
    hide && (
      <div>
        <Modal>
          <img className={css.avatar1} src={avatar1} alt="avatar" />
          <h2 className={css.modal_title}>Store Connected</h2>
          <p className={css.modal_text}>
            Chad is now able to manage customer support
          </p>
          <p className={css.modal_text}>requests for [STORE-NAME].</p>
          <Button click={click} marginTop={16}>
            Continue
          </Button>
          <div className={css.modal_connect_btn_wrapper}>
            <p className={css.modal_text}>Wrong store?&nbsp;</p>
            <button className={css.modal_connect_btn} type="button">
              Connect another one
            </button>
          </div>
        </Modal>
      </div>
    )
  );
};
export default ModalStoreConnect;
