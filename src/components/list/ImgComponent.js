import css from './listStyles.module.css';
import marker from '../../components/img/listMarker/marker.png';

const ImgComponent = () => {
  return <img className={css.marker} src={marker} alt="log company" />;
};

export default ImgComponent;
