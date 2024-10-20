import { RingLoader } from 'react-spinners';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.backdrop}>
      <RingLoader color="#20ca69" />
    </div>
  );
};
