import css from './headerContent.module.css';

const HeaderContent = () => {
  let volume = 1;
  return (
    <>
      <p className={css.label_band_scroll}>step 1 of 4</p>
      <div className={css.band_scroll}>
        {/* <input
          className={css.input_scroll}
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="4"
          label="step 1 of 4"
        ></input> */}
      </div>
    </>
  );
};
export default HeaderContent;
