import React from 'react';
import renderer from 'react-test-renderer';
import StationAvatar from '@assets/images/station-avatar.png';
import RadioWidget from './RadioWidget';

const mockStations = [
  { id: '0', name: 'Putin FM', frequency: '66,6', avatar: StationAvatar },
  { id: '1', name: 'Dribbble FM', frequency: '101,2', avatar: StationAvatar },
  { id: '2', name: 'Doge FM', frequency: '99,4', avatar: StationAvatar },
  { id: '3', name: 'Ballads FM', frequency: '87,1', avatar: StationAvatar },
  { id: '4', name: 'Maximum FM', frequency: '142,2', avatar: StationAvatar },
];

it('renders 5 items correctly', () => {
  const tree = renderer.create(<RadioWidget data={mockStations} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders 1 item correctly', () => {
  const tree = renderer.create(<RadioWidget data={mockStations.splice(-1)} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders no items correctly', () => {
  const tree = renderer.create(<RadioWidget data={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
