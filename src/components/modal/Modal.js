import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import css from './modal.module.css';

const modalRoot = document.querySelector('#modal');

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className={css.modal_overlay}>
        <div className={css.modal_wrapper}>
          <div
            className={css.modal_container}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>,
    modalRoot
  );
};
export default Modal;
