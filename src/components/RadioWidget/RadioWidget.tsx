import React, { useState } from 'react';
import styles from './index.module.scss';
import Footer from './Footer';
import List from './List';
import Header from './Header';
import { Station } from './types';

interface StationsListProps {
  data: Station[];
}

function RadioWidget({ data }: StationsListProps) {
  const [activeStation, setActiveStation] = useState<Station | null>(data[0]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [volume, setVolume] = useState(0);

  return (
    <div className={styles.container}>
      <Header />
      <List
        activeStationId={activeStation?.id}
        data={data}
        onClick={(station) => setActiveStation(station)}
        onVolumeIncrement={() => setVolume((currentVolume) => currentVolume + 1)}
        onVolumeDecrement={() => setVolume((currentVolume) => currentVolume - 1)}
      />
      <Footer activeStationName={activeStation?.name} />
    </div>
  );
}

export default RadioWidget;
