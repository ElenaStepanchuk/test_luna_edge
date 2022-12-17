import React, { useState } from 'react';

import css from './modalStoreConnect.module.css';
import Modal from 'components/modal/Modal';
import Button from 'components/button/Button';
import avatar1 from '../img/modal/avatar1.svg';
import ModalAlreadyConnect from 'components/modalAlreadyConnect/ModalAlreadyConnect';

const ModalStoreConnect = ({ hide, click }) => {
  const [showing, setShowing] = useState(false);

  const HandleTogleAlreadyModal = () => {
    if (showing === false) {
      setShowing(true);
    } else {
      setShowing(false);
    }
  };

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
            <button
              className={css.modal_connect_btn}
              type="button"
              onClick={HandleTogleAlreadyModal}
            >
              Connect another one
            </button>
          </div>
        </Modal>
        {showing && (
          <ModalAlreadyConnect
            hiding={showing}
            clicking={HandleTogleAlreadyModal}
          />
        )}
      </div>
    )
  );
};
export default ModalStoreConnect;
