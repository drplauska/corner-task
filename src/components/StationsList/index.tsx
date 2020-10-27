import React, { useState } from 'react';
import BackArrow from '@assets/icons/back-arrow.png';
import SwitchIcon from '@assets/icons/switch.png';
import MinusIcon from '@assets/icons/minus.png';
import PlusIcon from '@assets/icons/plus.png';
import StationAvatar from '@assets/images/station_avatar.png';
import './index.scss';

const mockStations = [
  { id: '0', name: 'Putin FM', frequency: '66,6' },
  { id: '1', name: 'Dribbble FM', frequency: '101,2' },
  { id: '2', name: 'Doge FM', frequency: '99,4' },
  { id: '3', name: 'Ballads FM', frequency: '87,1' },
  { id: '4', name: 'Maximum FM', frequency: '142,2' },
];

function StationsList() {
  const [activeStation, setActiveStation] = useState<String | null>('0');

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
        {mockStations.map(({ id, name, frequency }) => (
          <>
            {activeStation === id && (
              <div className="container__list__detail">
                <button type="button">
                  <img src={MinusIcon} alt="minus" className="container__list__detail__button" />
                </button>
                <img
                  src={StationAvatar}
                  alt="station avatar"
                  className="container__list__detail__avatar"
                />
                <button type="button">
                  <img src={PlusIcon} alt="plus" className="container__list__detail__button" />
                </button>
              </div>
            )}
            <button
              type="button"
              className="container__list__item"
              key={name}
              onClick={() => setActiveStation(id === activeStation ? null : id)}
            >
              <span className="container__list__item__label">{name}</span>
              <span className="container__list__item__frequency">{frequency}</span>
            </button>
          </>
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
