import { ClipLoader } from 'react-spinners';
import style from './Loader.module.css';

const Loader = () => (
  <div className={style.backdrop}>
    <ClipLoader color="#ffffff" size={50} />
  </div>
);

export default Loader;
