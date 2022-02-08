import create, {State} from 'zustand';
import {IUniverse} from '../proptypes/universe.types';

// Custom Types
interface StoreState extends State {
  universeIndexSelected: number;
  universe: null | IUniverse;
  getUniverses: (id: string | null) => void;
  getFightersByUniverse: (item: IUniverse | null) => void;
  setUniverse: (item: IUniverse, index: number) => void;
  resetUniverses: () => void;
  resetFilter: () => void;
}

const initialFilterValues = {
  rate: 0,
  sort: {key: 'name', name: 'Name', value: 'name'},
};

const all = {objectID: 'all', name: 'All', description: 'all'};

const useStore = create(set => ({
  universeIndexSelected: 0,
  universe: all,
  filter: {rate: 0, sort: {key: 'name', name: 'Name', value: 'name'}},
  setUniverse: (item: IUniverse, index: number) => {
    set(() => ({universeIndexSelected: index, universe: item}));
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
