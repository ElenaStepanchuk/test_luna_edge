// import { Container } from 'components';
import css from './footer.module.css';
import indicator from '../img/footer/indicator.png';

const Footer = () => {
  return (
    <footer className={css.footer_container}>
      <div className={css.container}>
        <button className={css.btn_prev__next} type="button">
          <svg
            className={css.btn_icon__prev__next}
            alt="icon prev button"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0L14.115 2.115L5.745 10.5H24V13.5H5.745L14.115 21.885L12 24L0 12L12 0Z" />
          </svg>
        </button>
        <button className={css.btn_prev__next} type="button">
          <svg
            className={css.btn_icon__prev__next}
            alt="icon next button"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0L9.885 2.115L18.255 10.5H0V13.5H18.255L9.885 21.885L12 24L24 12L12 0Z" />
          </svg>
        </button>
        <button className={css.btn_plus} type="button">
          <svg
            className={css.btn_icon__plus}
            alt="icon plus button"
            width="24"
            height="24"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.375 2C14.375 1.24061 13.7594 0.625 13 0.625C12.2406 0.625 11.625 1.24061 11.625 2V11.625H2C1.24061 11.625 0.625 12.2406 0.625 13C0.625 13.7594 1.24061 14.375 2 14.375H11.625V24C11.625 24.7594 12.2406 25.375 13 25.375C13.7594 25.375 14.375 24.7594 14.375 24V14.375H24.5C25.2594 14.375 25.875 13.7594 25.875 13C25.875 12.2406 25.2594 11.625 24.5 11.625H14.375V2Z"
            />
          </svg>
        </button>

        <svg
          className={css.btn_icon__one}
          alt="icon one button"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="22"
            height="22"
            rx="4"
            stroke="#80858A"
            strokeWidth="2.5"
          />
          <path
            d="M12.8413 18H14.7583V8.84033H12.8477L10.48 10.4844V12.2109L12.7271 10.6494H12.8413V18Z"
            fill="#80858A"
          />
        </svg>

        <button className={css.btn_more} type="button">
          <svg
            className={css.btn_btn_icon__more}
            alt="icon more button"
            width="26"
            height="6"
            viewBox="0 0 26 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_956_7493)">
              <g filter="url(#filter0_d_956_7493)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3ZM16 3C16 4.65685 14.6569 6 13 6C11.3431 6 10 4.65685 10 3C10 1.34315 11.3431 0 13 0C14.6569 0 16 1.34315 16 3ZM23 6C24.6569 6 26 4.65685 26 3C26 1.34315 24.6569 0 23 0C21.3431 0 20 1.34315 20 3C20 4.65685 21.3431 6 23 6Z"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_956_7493"
                x="-4"
                y="0"
                width="34"
                height="14"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_956_7493"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_956_7493"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_956_7493">
                <rect width="26" height="6" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
        <img className={css.indicator} src={indicator} alt="indicator" />
      </div>
    </footer>
  );
};
export default Footer;
