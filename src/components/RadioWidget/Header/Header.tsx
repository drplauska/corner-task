import React from 'react';
import BackArrow from '@assets/icons/back-arrow.png';
import SwitchIcon from '@assets/icons/switch.png';
import styles from './index.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <button type="button" onClick={() => null}>
        <img src={BackArrow} alt="go back" className={styles.icon} />
      </button>
      <span className={styles.label}>STATIONS</span>
      <button type="button" onClick={() => null}>
        <img src={SwitchIcon} alt="switch off" className={styles.icon} />
      </button>
    </div>
  );
}

export default Header;
