import {useMemo} from 'react';

import axios from 'axios';
import useSWR from 'swr';

import useStore from '../store';
import {
  getFightersDynamicApi,
  getFightersFormatted,
} from '../utils/fighters.utils';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const useFighters = () => {
  const universe = useStore(state => state.universe);
  const filter = useStore(state => state.filter);
  const api = useMemo(
    () => getFightersDynamicApi(universe.name),
    [universe.name],
  );

  const {data, error, mutate, isValidating} = useSWR(api, fetcher);

  const dataFormatted = useMemo(() => {
    return getFightersFormatted({data, rate: filter.rate, sort: filter.sortBy});
  }, [filter.rate, filter.sortBy, data]);

  return {
    data: dataFormatted,
    error,
    isLoading: !error && !data,
    mutate,
    isValidating,
  };
};

export default useFighters;
