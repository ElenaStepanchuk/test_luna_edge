import React, { useState, useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import css from './progress.module.css';

const Progress = ({ completed }) => {
  // const [completed, setCompleted] = useState(1);
  // let completed = 0;
  // useEffect(() => {
  //   setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  // }, []);

  return (
    <div className={css.progress_wrapper}>
      <p className={css.label_band_scroll}>Step {completed} of 4</p>
      <ProgressBar
        completed={completed}
        maxCompleted={4}
        className={css.wrapper}
        barContainerClassName={css.container}
        height={'8px'}
        labelColor={'black'}
        isLabelVisible={false}
        bgColor={'#c9d3e0'}
      />
    </div>
  );
};
export default Progress;
