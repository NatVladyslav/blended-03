import { Link, useLocation } from 'react-router-dom';
import styles from './GoBackBtn.module.css';

export const GoBackBtn = () => {
  const location = useLocation();
  const goBackRef = location.state ?? '/';

  return (
    <Link to={goBackRef} className={styles.link}>
      Go Back
    </Link>
  );
};
