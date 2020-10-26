import React, { useState } from 'react';
import BackArrow from '@assets/icons/back-arrow.png';
import SwitchIcon from '@assets/icons/switch.png';
import './index.scss';

const mockStations = [
  { name: 'Putin FM', frequency: '66,6' },
  { name: 'Dribbble FM', frequency: '101,2' },
  { name: 'Ballads FM', frequency: '87,1' },
  { name: 'Maximum FM', frequency: '142,2' },
];

function StationsList() {
  const [activeStation, setActiveStation] = useState('0');

  return (
    <div className="container">
      <div className="container__header">
        <button type="button" onClick={() => null}>
          <img src={BackArrow} alt="go back" className="container__header__icon" />
        </button>
        <span className="container__header__label">STATIONS</span>
        <button type="button" onClick={() => null}>
          <img src={SwitchIcon} alt="switch off" className="container__header__icon" />
        </button>
      </div>
      <div className="container__list">
        {mockStations.map(({ name, frequency }) => (
          <div className="container__list__item" key={name}>
            <span className="container__list__item__label">{name}</span>
            <span className="container__list__item__frequency">{frequency}</span>
          </div>
        ))}
      </div>
      <div className="container__footer">
        {activeStation && (
          <>
            <span className="container__footer__info">CURRENTLY PLAYING</span>
            <span className="container__footer__station">
              {mockStations[Number(activeStation)].name}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

export default StationsList;
