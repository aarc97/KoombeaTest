import create, {State} from 'zustand';
import {IUniverse} from '../proptypes/universe.types';
import {IRadioGroupValues} from '../proptypes/forms.types';
import {filter, find, findIndex} from 'lodash';

// Custom Types

interface StoreState extends State {
  universeIndexSelected: number;
  universe: null | IUniverse;
  sortValues: IRadioGroupValues[];
  filter: {rate: string; sortBy: string};

  handleSortValuesChecked: (item: IRadioGroupValues, idx: number) => void;
  getUniverses: (id: string | null) => void;
  getFightersByUniverse: (item: IUniverse | null) => void;
  setUniverse: (item: IUniverse, index: number) => void;
  resetUniverses: () => void;
  resetFilter: () => void;
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

const useStore = create(set => ({
  universeIndexSelected: 0,
  universe: all,
  isFirstTime: false,
  sortValues: initialSortValues,
  filter: initialFilterValues,
  handleSortValuesChecked: (item: IRadioGroupValues, idx: number) => {
    set(state => {
      let arr = state.sortValues;
      let previewIndexSelected = findIndex(
        state.sortValues,
        e => e.checked === true,
      );
      arr[previewIndexSelected].checked = false;
      arr[idx].checked = true;

      return {sortValues: arr, filter: {...filter, sortBy: arr[idx].value}};
    });
  },
  handleFirstTime: (val: boolean) => {
    set(() => ({isFirstTime: val}));
  },
  setUniverse: (item: IUniverse, index: number) => {
    set(() => ({universeIndexSelected: index, universe: item}));
  },
  handleFilter: ({
    sortBy,
    rate,
    sortValues,
  }: {
    rate: number;
    sortBy: string;
    sortValues: IRadioGroupValues[];
  }) => {
    set(() => ({
      filter: {sortBy, rate},
      sortValues,
    }));
  },
  resetUniverses: () => {
    return set(() => ({
      universe: null,
      universeIndexSelected: 0,
    }));
  },
  resetFilter: () =>
    set(() => ({
      filter: initialFilterValues,
    })),
}));

export default useStore;
