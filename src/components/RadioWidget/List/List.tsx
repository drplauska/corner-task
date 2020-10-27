import React from 'react';
import MinusIcon from '@assets/icons/minus.png';
import PlusIcon from '@assets/icons/plus.png';
import StationAvatar from '@assets/images/station_avatar.png';
import { Station } from '../types';
import styles from './index.module.scss';

interface ListProps {
  onClick: (station: Station | null) => void;
  data: Station[];
  activeStationId: String | undefined;
}

function List({ data, onClick, activeStationId }: ListProps) {
  return (
    <div className={styles.list}>
      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          {activeStationId === item.id && (
            <div className={styles.detail}>
              <button type="button">
                <img src={MinusIcon} alt="minus" className={styles.button} />
              </button>
              <img src={StationAvatar} alt="station avatar" className={styles.avatar} />
              <button type="button">
                <img src={PlusIcon} alt="plus" className={styles.button} />
              </button>
            </div>
          )}
          <button
            type="button"
            className={styles.details}
            onClick={() => onClick(activeStationId === item.id ? null : item)}
          >
            <span className={styles.label}>{item.name}</span>
            <span className={styles.frequency}>{item.frequency}</span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default List;
