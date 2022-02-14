import {filter, findIndex, sortBy, toLower} from 'lodash';
import {Label} from '../constants';
import {FIGHTERS_API} from '../constants/api.constants';
import {IFighter, IGetFightersFormatted} from '../proptypes/fighter.types';
import {IRadioGroupValues} from '../proptypes/forms.types';

const getFightersByRate = (arr: IFighter[], rate: number) => {
  return filter(arr, itemVals => itemVals.rate === rate);
};

const getFightersSorted = (arr: IFighter[], value: string) => {
  return sortBy(arr, [value], ['asc']);
};

const getFightersDynamicApi = (name: string) => {
  if (toLower(name) !== Label.ALL) {
    return `${FIGHTERS_API}?universe=${name}`;
  }
  return FIGHTERS_API;
};

const getFightersFormatted = ({data, rate, sort}: IGetFightersFormatted) => {
  const noFilter = rate === 0;

  if (noFilter) {
    return getFightersSorted(data, sort);
  }

  const filtered = getFightersByRate(data, rate);
  return getFightersSorted(filtered, sort);
};

const handleCheckOnSortValues = (data: IRadioGroupValues[], idx: number) => {
  // Clone;
  const arr = data.slice();

  const prevIndex = findIndex(arr, e => e.checked === true);
  arr[prevIndex].checked = false;
  arr[idx].checked = true;

  return arr;
};

export {
  getFightersByRate,
  getFightersSorted,
  getFightersDynamicApi,
  getFightersFormatted,
  handleCheckOnSortValues,
};
