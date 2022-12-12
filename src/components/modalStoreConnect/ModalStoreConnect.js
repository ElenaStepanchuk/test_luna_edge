import React, { useState } from 'react';

import css from './modalStoreConnect.module.css';
import Modal from 'components/modal/Modal';
import Button from 'components/button/Button';
import avatar1 from '../img/modal/avatar1.svg';
const ModalStoreConnect = () => {
  const [isShowing, setIsShowing] = useState(true);

  const HandleTogleModal = () => {
    if (isShowing === false) {
      setIsShowing(true);
    } else {
      setIsShowing(false);
    }
  };

  return (
    isShowing && (
      <div>
        <Modal>
          <img className={css.avatar1} src={avatar1} alt="avatar" />
          <h2>Store Connected</h2>
          <p>
            Chad is now able to manage customer support requests for
            [STORE-NAME].
          </p>
          <Button click={HandleTogleModal}>Continue</Button>
          <p>
            Wrong store?{' '}
            <a href="http://localhost:3000/connectShopifyStore">
              Connect another one
            </a>
          </p>
        </Modal>
      </div>
    )
  );
};
export default ModalStoreConnect;
