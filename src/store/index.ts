import create, {State} from 'zustand';
import {IUniverse} from '../proptypes/universe.types';
import {IRadioGroupValues} from '../proptypes/forms.types';

// Custom Types
interface IFilter {
  rate: number;
  sortBy: string;
}
interface IHandleFilter extends IFilter {
  sortValues: IRadioGroupValues[];
}

interface StoreState extends State {
  universeIndexSelected: number;
  universe: IUniverse;
  sortValues: IRadioGroupValues[];
  filter: IFilter;
  isFirstTime: boolean;

  handleFirstTime: (val: boolean) => void;
  setUniverse: (item: IUniverse, index: number) => void;
  handleFilter: (prop: IHandleFilter) => void;
}

const initialFilterValues = {
  rate: 0,
  sortBy: 'name',
};

const all = {objectID: 'all', name: 'All', description: 'all'};

export const initialSortValues: IRadioGroupValues[] = [
  {key: 'name', name: 'Name', value: 'name', checked: true},
  {key: 'price', name: 'Price', value: 'price', checked: false},
  {key: 'rate', name: 'Rate', value: 'rate', checked: false},
  {key: 'downloads', name: 'Downloads', value: 'downloads', checked: false},
];

const useStore = create<StoreState>(set => ({
  universeIndexSelected: 0,
  universe: all,
  isFirstTime: false,
  sortValues: initialSortValues,
  filter: initialFilterValues,

  handleFirstTime: (val: boolean) =>
    set(state => ({...state, isFirstTime: val})),

  setUniverse: (item: IUniverse, index: number) =>
    set(state => ({...state, universeIndexSelected: index, universe: item})),

  handleFilter: ({sortBy, rate, sortValues}: IHandleFilter) =>
    set(state => ({
      ...state,
      filter: {sortBy, rate},
      sortValues,
    })),
}));

export default useStore;
