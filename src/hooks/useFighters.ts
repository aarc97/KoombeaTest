import {useMemo} from 'react';

import axios from 'axios';
import useSWR from 'swr';

import {FIGHTERS_API} from '../constants/api.constants';
import useStore from '../store';
import {toLower} from 'lodash';
import {getFightersByRate, getFightersSorted} from '../utils/fighters.utils';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const onFightersDynamicApi = (name: string) => {
  if (toLower(name) !== 'all') {
    return `${FIGHTERS_API}?universe=${name}`;
  }
  return FIGHTERS_API;
};

const useFighters = () => {
  const universe = useStore(state => state.universe);
  const filter = useStore(state => state.filter);
  const api = useMemo(
    () => onFightersDynamicApi(universe.name),
    [universe.name],
  );

  const {data, error} = useSWR(api, fetcher);

  const dataFormatted = useMemo(() => {
    const noFilter = filter.rate === 0;

    if (noFilter) {
      return getFightersSorted(data, filter.sortBy);
    }

    const filtered = getFightersByRate(data, filter.rate);
    return getFightersSorted(filtered, filter.sortBy);
  }, [filter.rate, filter.sortBy, data]);

  return {
    data: dataFormatted,
    error,
    isLoading: !error && !data,
  };
};

export default useFighters;
