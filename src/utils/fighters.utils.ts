import {filter, sortBy} from 'lodash';
import {IFighter} from '../proptypes/fighter.types';

const getFightersByRate = (arr: IFighter[], rate: number) => {
  return filter(arr, itemVals => itemVals.rate === rate);
};

const getFightersSorted = (arr: IFighter[], value: string) => {
  return sortBy(arr, [value], ['asc']);
};

export {getFightersByRate, getFightersSorted};
