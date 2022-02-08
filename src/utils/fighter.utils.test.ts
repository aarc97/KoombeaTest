import {fightersData} from '../store/fake/fightersData';
import {getFightersByRate, getFightersFormatted} from './fighters.utils';

test('should filter fighters by rate 5 and return 0 fighters ', () => {
  const filtered = getFightersByRate(fightersData, 5);
  expect(filtered.length).toBe(0);
});

test('should sort by "name" and filter by "4" rate and return 2 fighters ', () => {
  const result = getFightersFormatted({
    data: fightersData,
    rate: 4,
    sort: 'name',
  });

  expect(result.length).toBe(2);
  expect(result[0].name).toBe('Banjo & Kazooie');
  // const sorted = getFightersSorted(fightersData, 'price');
});
