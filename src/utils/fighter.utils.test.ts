import {fightersData} from '../store/fake/fightersData';
import {getFightersByRate, getFightersSorted} from './fighters.utils';

test('should filter fighters by rate return 0 ', () => {
  const filtered = getFightersByRate(fightersData, 5);
  expect(filtered.length).toBe(0);
});

test('should sort fighters by a given prop ', () => {
  // const sorted = getFightersSorted(fightersData, 'price');
});
