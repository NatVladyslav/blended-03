import { NavLink } from 'react-router-dom';
import { FaFlagUsa } from 'react-icons/fa';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <FaFlagUsa size="40px" color="#0c7bc1" />

          <nav>
            <ul className={styles.nav}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/country"
                  className={({ isActive }) =>
                    isActive ? styles.active : styles.link
                  }
                >
                  Countries
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
