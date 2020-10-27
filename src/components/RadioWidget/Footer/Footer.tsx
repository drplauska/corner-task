import React from 'react';
import styles from './index.module.scss';

interface FooterProps {
  activeStationName: String | undefined;
}

function Footer({ activeStationName }: FooterProps) {
  return (
    <div className={styles.footer}>
      {activeStationName && (
        <>
          <span className={styles.label}>CURRENTLY PLAYING</span>
          <span className={styles.station}>{activeStationName}</span>
        </>
      )}
    </div>
  );
}

export default Footer;
