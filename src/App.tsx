import React from 'react';
import StationAvatar from '@assets/images/station-avatar.png';
import RadioWidget from './components/RadioWidget';
import { Station } from './components/RadioWidget/types';

import './App.css';

const mockStations: Station[] = [
  { id: '0', name: 'Putin FM', frequency: '66,6', avatar: StationAvatar },
  { id: '1', name: 'Dribbble FM', frequency: '101,2', avatar: StationAvatar },
  { id: '2', name: 'Doge FM', frequency: '99,4', avatar: StationAvatar },
  { id: '3', name: 'Ballads FM', frequency: '87,1', avatar: StationAvatar },
  { id: '4', name: 'Maximum FM', frequency: '142,2', avatar: StationAvatar },
];

// note: bad UX. As a user I'd want to open and
// close the station detailed info screen without moving my cursor

function App() {
  return (
    <div>
      <RadioWidget data={mockStations} />
    </div>
  );
}

export default App;
