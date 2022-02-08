import axios from 'axios';

import useSWR from 'swr';
import {UNIVERSE_API} from '../constants/api.constants';

const allValue = {objectID: 'all', name: 'All', description: 'all'};

const fetcher = async (url: string) => {
  const res = await axios.get(url);
  return [allValue, ...res.data];
};

const useUniverse = () => {
  const {data, error} = useSWR(UNIVERSE_API, fetcher);
  return {
    data: data || [],
    error,
    isLoading: !error && !data,
  };
};

export default useUniverse;
