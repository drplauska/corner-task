import React, { useCallback } from 'react';
import MinusIcon from '@assets/icons/minus.png';
import PlusIcon from '@assets/icons/plus.png';
import StationAvatar from '@assets/images/station-avatar.png';
import { Station } from '../types';
import styles from './index.module.scss';

interface ListProps {
  onClick: (station: Station | null) => void;
  data: Station[];
  activeStationId: String | undefined;
  onVolumeIncrement: () => void;
  onVolumeDecrement: () => void;
}

function List({ data, onClick, activeStationId, onVolumeIncrement, onVolumeDecrement }: ListProps) {
  const renderControls = useCallback(
    (id: string) => {
      if (id === activeStationId) {
        return (
          <div className={styles.detail}>
            <button type="button" onClick={onVolumeDecrement}>
              <img src={MinusIcon} alt="minus" className={styles.button} />
            </button>
            <img src={StationAvatar} alt="station avatar" className={styles.avatar} />
            <button type="button" onClick={onVolumeIncrement}>
              <img src={PlusIcon} alt="plus" className={styles.button} />
            </button>
          </div>
        );
      }
      return null;
    },
    [activeStationId]
  );

  return (
    <div className={styles.list}>
      {data.map((item) => (
        <div key={item.id} className={styles.item}>
          {renderControls(item.id)}
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
