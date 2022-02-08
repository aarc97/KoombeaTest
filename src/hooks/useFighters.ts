import {useMemo} from 'react';

import axios from 'axios';
import useSWR from 'swr';

import {FIGHTERS_API} from '../constants/api.constants';
import useStore from '../store';
import {toLower} from 'lodash';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

const onFightersDynamicApi = (name: string) => {
  if (toLower(name) !== 'all') {
    return `${FIGHTERS_API}?universe=${name}`;
  }
  return FIGHTERS_API;
};

const useFighters = () => {
  const universe = useStore(state => state.universe);
  const api = useMemo(
    () => onFightersDynamicApi(universe.name),
    [universe.name],
  );

  const {data, error} = useSWR(api, fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};

export default useFighters;
