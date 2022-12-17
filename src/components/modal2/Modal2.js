import React from 'react';
import ReactDOM from 'react-dom';

import css from './modal2.module.css';

const modalRoot2 = document.querySelector('#modal2');

const Modal2 = ({ children }) => {
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
    modalRoot2
  );
};
export default Modal2;
